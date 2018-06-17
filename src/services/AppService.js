import FixtureService from "./FixtureService";
import EventService, { EventNames } from "./EventService";
import NotificationService from "./NotificationService";

const Store = {
  fixtures: [],
  matchesInPlay: []
};

const AppService = {
  refreshIntervalInPlayId: null,
  refreshIntervalId: null,
  async refreshData() {
    EventService.triggerEvent(EventNames.ON_REFRESH_DATA_REQUEST_IN_PROGRESS);

    try {
      const fixtures = await FixtureService.fetchFixtures();

      if (hasChanged(Store.fixtures, fixtures)) {
        const matchesInPlay = FixtureService.getMatchesInPlay(fixtures);

        if (hasChanged(Store.matchesInPlay, matchesInPlay)) {
          if (matchesInPlay.length) {
            NotificationService.notify(getLiveNotificationText(matchesInPlay));
          } else { // match ended!
            NotificationService.notify(
              "Finished \n" + getLiveNotificationText(Store.matchesInPlay)
            );
          }
          Store.matchesInPlay = matchesInPlay;
          this.updateRefreshInterval();
        }

        const matchesFinished = FixtureService.getMatchesFinished(fixtures);
        const matchesUpcoming = FixtureService.getMatchesUpcoming(fixtures);
        const nextMatches = FixtureService.getNextMatches(matchesUpcoming);

        EventService.triggerEvent(EventNames.ON_DATA_UPDATE, {
          matchesInPlay,
          matchesFinished,
          matchesUpcoming,
          nextMatches
        });

        Store.fixtures = fixtures;
      }
    } catch (err) {
      console.error(err); // TODO: improve logging
    } finally {
      EventService.triggerEvent(EventNames.ON_REFRESH_DATA_REQUEST_DONE);
    }
  },

  async init() {
    NotificationService.notify("Welcome to World Cup live 2018!");
    await this.refreshData();

    this.refreshIntervalId = setInterval(async () => {
      await this.refreshData();
    }, 30 * 60 * 1000);
  },

  updateRefreshInterval() {
    if (Store.matchesInPlay.length) {
      if (this.refreshIntervalInPlayId === null) {
        this.refreshIntervalInPlayId = setInterval(async () => {
          await this.refreshData();
        }, 60 * 1000);
        console.log("Matches in play, refreshing every minute");
      } else {
        console.log("Matches in play, no change to refresh rate");
      }
    } else {
      console.log("No matches in play, clearing live update");
      if (this.refreshIntervalInPlayId) {
        clearInterval(this.refreshIntervalInPlayId);
        this.refreshIntervalInPlayId = null;
      }
    }
  }
};

const hasChanged = (prev, next) => {
  // yes I am a dirty, dirty rat...
  if (JSON.stringify(prev) !== JSON.stringify(next)) {
    return true;
  }
  return false;
};

const getLiveNotificationText = matchesInPlay => {
  let result = "";
  
  for (const match of matchesInPlay) {
    result += `${match.home} ${match.homeScore} - ${match.away} ${
      match.awayScore
    } \n`;
  }
  return result;
};

export default AppService;
