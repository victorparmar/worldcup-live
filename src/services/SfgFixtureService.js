import fetch from "isomorphic-fetch";
import moment from "moment";
import Chance from "chance";
import SampleMatches from "./sample-matches.json";

const chance = new Chance();

const SfgFixtureService = {
  fetchFixtures: () => {
    return fetch("https://world-cup-json.herokuapp.com/matches", {
      method: "GET"
    }).then(response => {
      return response.json();
    });
  },
  fetchFixturesTest: () => {
    console.log("fetchFixturesTest", moment().format("HH:mm:ss"));

    let result = JSON.parse(JSON.stringify(SampleMatches));

    if (chance.bool()) {
      result = result.filter(fixture => {
        return fixture.status !== "in progress";
      });
    }

    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(result);
      }, 1000);
    });
  },
  getMatchesInPlay: fixtures => {
    return filterFixtures(fixtures, ["in progress", "pending_correction"]);
  },
  getMatchesFinished: fixtures => {
    return filterFixtures(fixtures, ["completed"]);
  },
  getMatchesUpcoming: fixtures => {
    return filterFixtures(fixtures, ["future"]);
  },
  getNextMatches: upcomingMatches => {
    const sorted = upcomingMatches.sort((a, b) => {
      const aTime = moment(a.date).unix();
      const bTime = moment(b.date).unix();

      if (aTime < bTime) {
        return -1;
      }

      if (aTime > bTime) {
        return 1;
      }

      return 0;
    });

    if (sorted.length) {
      const nextDate = moment(sorted[0].date);

      return sorted.filter(match => {
        const date = moment(match.date);
        return nextDate.format("YYYY-MM-DD") === date.format("YYYY-MM-DD");
      });
    }

    return [];
  }
};

const getSimpleFixture = fixture => {
  return {
    id: fixture.fifa_id,
    date: fixture.datetime,
    home: fixture.home_team.country,
    homeScore: fixture.home_team.goals,
    away: fixture.away_team.country,
    awayScore: fixture.away_team.goals,
    time: fixture.time
  };
};

const filterFixtures = (fixtures, statuses) => {
  return fixtures
    .filter(fixture => {
      for (const status of statuses) {
        if (fixture.status === status) {
          return true;
        }  
      }
      return false;
    })
    .map(getSimpleFixture);
};

export default SfgFixtureService;
