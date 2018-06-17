import FixtureService from "./FixtureService";
import EventService, { EventNames } from "./EventService";
import NotificationService from "./NotificationService";

const hasChanged = (prev, next) => {
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
      const fixtures = await FixtureService.fetchFixturesTest();

      if (hasChanged(Store.fixtures, fixtures)) {
        const matchesInPlay = FixtureService.getMatchesInPlay(fixtures);

        if (hasChanged(Store.matchesInPlay, matchesInPlay)) {
          NotificationService.notify(getLiveNotificationText(matchesInPlay));
          Store.matchesInPlay = matchesInPlay;
          this.updateRefreshInterval();
        }

        EventService.triggerEvent(EventNames.ON_DATA_UPDATE, {
          matchesInPlay,
          matchesFinished: [],
          matchesUpcoming: []
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
    NotificationService.notify("Welcome to World Cup 2018!");
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
        }, 60000);
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

export default AppService;
