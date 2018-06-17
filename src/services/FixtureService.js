import fetch from "isomorphic-fetch";
import moment from "moment";
import SampleFixtures from "./sample-fixtures.json";

const key = "982b4410af404169b02efc3cbb0ec791"; // Get your own at https://api.football-data.org/

const FixtureService = {
  fetchFixtures: () => {
    return fetch("http://api.football-data.org/v1/competitions/467/fixtures", {
      method: "GET",
      headers: {
        "X-Auth-Token": key
      }
    }).then(response => {
      return response.json();
    });
  },
  fetchFixturesTest: () => {
    console.log("fetchFixturesTest");
    return Promise.resolve(SampleFixtures);
  },
  getMatchesInPlay: fixtures => {
    return filterFixtures(fixtures, "IN_PLAY");
  },
  getMatchesFinished: fixtures => {
    return filterFixtures(fixtures, "FINISHED");
  },
  getMatchesUpcoming: fixtures => {
    return [
      ...filterFixtures(fixtures, "TIMED"),
      ...filterFixtures(fixtures, "SCHEDULED")
    ];
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
    id: fixture._links.self.href.substr(fixture._links.self.href.lastIndexOf("/") + 1),
    date: fixture.date,
    home: fixture.homeTeamName,
    homeScore: fixture.result.goalsHomeTeam,
    away: fixture.awayTeamName,
    awayScore: fixture.result.goalsAwayTeam
  };
};

const filterFixtures = (fixtures, status) => {
  return fixtures.fixtures
    .filter(fixture => {
      return fixture.status === status;
    })
    .map(getSimpleFixture);
};

export default FixtureService;
