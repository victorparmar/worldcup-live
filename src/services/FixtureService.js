import fetch from "isomorphic-fetch";

const key = "982b4410af404169b02efc3cbb0ec791"; // Get your own at https://api.football-data.org/

const FixtureService = {
  fetchFixtures: () => {
    return fetch("http://api.football-data.org/v1/competitions/467/fixtures", {
      method: "GET",
      headers: {
        "X-Auth-Token": key
      }
    }).then((response) => {
      return response.json();
    });
  }
};

export default FixtureService;
