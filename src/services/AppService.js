import SfgFixtureService from "./SfgFixtureService";
import EventService, { EventNames } from "./EventService";
import NotificationService from "./NotificationService";

const Store = {
  fixtures: [],
  matchesInPlay: []
};

const AppService = {
  refreshIntervalInPlayId: null,
  refreshIntervalInPlay: 60 * 1000,
  refreshIntervalId: null,
  refreshInterval: 5 * 60 * 1000,
  refreshTimeoutId: null,
  env: "prod",
  async refreshData() {
    EventService.triggerEvent(EventNames.ON_REFRESH_DATA_REQUEST_IN_PROGRESS);

    try {
      let fixtures = null;

      if (this.env === "prod") {
        fixtures = await SfgFixtureService.fetchFixtures();
      } else {
        fixtures = await SfgFixtureService.fetchFixturesTest();
      }

      if (hasChanged(Store.fixtures, fixtures)) {
        const matchesInPlay = SfgFixtureService.getMatchesInPlay(fixtures);

        if (hasChanged(Store.matchesInPlay, matchesInPlay)) {
          if (this.env === "dev") {
            console.log(Store.matchesInPlay, matchesInPlay); // TODO: improve logging
          }

          if (matchesInPlay.length) {
            NotificationService.notify(getLiveNotificationText(matchesInPlay));
          } else {
            // match ended!
            NotificationService.notify("Finished \n" + getLiveNotificationText(Store.matchesInPlay));
          }

          Store.matchesInPlay = JSON.parse(JSON.stringify(matchesInPlay));
        }

        const matchesFinished = SfgFixtureService.getMatchesFinished(fixtures);
        const matchesUpcoming = SfgFixtureService.getMatchesUpcoming(fixtures);
        const nextMatches = SfgFixtureService.getNextMatches(matchesUpcoming);

        EventService.triggerEvent(EventNames.ON_DATA_UPDATE, {
          matchesInPlay,
          matchesFinished,
          matchesUpcoming,
          nextMatches
        });

        Store.fixtures = JSON.parse(JSON.stringify(fixtures));
      }
    } catch (err) {
      console.error(err); // TODO: improve logging
    } finally {
      EventService.triggerEvent(EventNames.ON_REFRESH_DATA_REQUEST_DONE);
      this.updateRefreshInterval();
    }
  },

  async init(env) {
    this.env = env;

    if (this.env !== "prod") {
      this.refreshIntervalInPlay = 5 * 1000;
      this.refreshInterval = 10 * 1000;
    }

    NotificationService.notify("Welcome to World Cup live 2018!");
    await this.refreshData();
  },

  updateRefreshInterval() {
    if (this.refreshTimeoutId) {
      clearTimeout(this.refreshTimeoutId);
    }

    if (Store.matchesInPlay.length) {
      this.refreshTimeoutId = setTimeout(async () => {
        await this.refreshData();
      }, this.refreshIntervalInPlay);
      console.log("Matches in play, next refresh in " + this.refreshIntervalInPlay / 1000 + " seconds");
    } else {
      this.refreshTimeoutId = setTimeout(async () => {
        await this.refreshData();
      }, this.refreshInterval);

      console.log("No matches in play, next refresh in " + this.refreshInterval / 1000 + " seconds");
    }
  }

  /*
  clearRefreshInterval() {
    if (this.refreshIntervalId) {
      clearInterval(this.refreshIntervalId);
      this.refreshIntervalId = null;
    }
  },

  clearRefreshIntervalInPlay() {
    if (this.refreshIntervalInPlayId) {
      clearInterval(this.refreshIntervalInPlayId);
      this.refreshIntervalInPlayId = null;
    }
  }
  */
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
    result += `${match.time} ${match.home} ${match.homeScore} - ${match.away} ${match.awayScore} \n`;
  }
  return result;
};

export default AppService;
