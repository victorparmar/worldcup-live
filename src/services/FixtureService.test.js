import FixtureService from "./FixtureService";
import SampleFixtures from "./sample-fixtures";

describe("FixtureService", () => {
  it("should fetch fixtures", async () => {
    try {
      const fixtures = await FixtureService.fetchFixtures();
      expect(fixtures.count).toEqual(64);
    } catch (err) {
      console.error(err); // try not to rely on the network for tests
    }
  });

  it("should get matches IN_PLAY", () => {
    const matchesInPlay = FixtureService.getMatchesInPlay(SampleFixtures);
    const result = JSON.stringify(matchesInPlay);
    // console.log(result);
    expect(result).toEqual(
      '[{"id":"165074","date":"2018-06-16T19:00:00Z","home":"Croatia","homeScore":1,"away":"Nigeria","awayScore":0}]'
    );
  });

  it("should get matches FINISHED", () => {
    const matchesFinished = FixtureService.getMatchesFinished(SampleFixtures);
    const result = JSON.stringify(matchesFinished);
    // console.log(result);
    expect(result).toEqual(
      '[{"id":"165069","date":"2018-06-14T15:00:00Z","home":"Russia","homeScore":5,"away":"Saudi Arabia","awayScore":0},{"id":"165084","date":"2018-06-15T12:00:00Z","home":"Egypt","homeScore":0,"away":"Uruguay","awayScore":1},{"id":"165083","date":"2018-06-15T15:00:00Z","home":"Morocco","homeScore":0,"away":"Iran","awayScore":1},{"id":"165076","date":"2018-06-15T18:00:00Z","home":"Portugal","homeScore":3,"away":"Spain","awayScore":3},{"id":"165072","date":"2018-06-16T10:00:00Z","home":"France","homeScore":2,"away":"Australia","awayScore":1},{"id":"165073","date":"2018-06-16T13:00:00Z","home":"Argentina","homeScore":1,"away":"Iceland","awayScore":1},{"id":"165071","date":"2018-06-16T16:00:00Z","home":"Peru","homeScore":0,"away":"Denmark","awayScore":1}]'
    );
  });

  it("should get upcoming matches", () => {
    const matchesUpcoming = FixtureService.getMatchesUpcoming(SampleFixtures);
    const result = JSON.stringify(matchesUpcoming);
    // console.log(result);
    expect(result).toEqual(
      '[{"id":"165075","date":"2018-06-17T12:00:00Z","home":"Costa Rica","homeScore":null,"away":"Serbia","awayScore":null},{"id":"165082","date":"2018-06-17T15:00:00Z","home":"Germany","homeScore":null,"away":"Mexico","awayScore":null},{"id":"165070","date":"2018-06-17T18:00:00Z","home":"Brazil","homeScore":null,"away":"Switzerland","awayScore":null},{"id":"165081","date":"2018-06-18T12:00:00Z","home":"Sweden","homeScore":null,"away":"Korea Republic","awayScore":null},{"id":"165077","date":"2018-06-18T15:00:00Z","home":"Belgium","homeScore":null,"away":"Panama","awayScore":null},{"id":"165078","date":"2018-06-18T18:00:00Z","home":"Tunisia","homeScore":null,"away":"England","awayScore":null},{"id":"165080","date":"2018-06-19T12:00:00Z","home":"Colombia","homeScore":null,"away":"Japan","awayScore":null},{"id":"165079","date":"2018-06-19T15:00:00Z","home":"Poland","homeScore":null,"away":"Senegal","awayScore":null},{"id":"165100","date":"2018-06-19T18:00:00Z","home":"Russia","homeScore":null,"away":"Egypt","awayScore":null},{"id":"165087","date":"2018-06-20T12:00:00Z","home":"Portugal","homeScore":null,"away":"Morocco","awayScore":null},{"id":"165086","date":"2018-06-20T15:00:00Z","home":"Uruguay","homeScore":null,"away":"Saudi Arabia","awayScore":null},{"id":"165085","date":"2018-06-20T18:00:00Z","home":"Iran","homeScore":null,"away":"Spain","awayScore":null},{"id":"165099","date":"2018-06-21T12:00:00Z","home":"Denmark","homeScore":null,"away":"Australia","awayScore":null},{"id":"165096","date":"2018-06-21T15:00:00Z","home":"France","homeScore":null,"away":"Peru","awayScore":null},{"id":"165094","date":"2018-06-21T18:00:00Z","home":"Argentina","homeScore":null,"away":"Croatia","awayScore":null},{"id":"165092","date":"2018-06-22T12:00:00Z","home":"Brazil","homeScore":null,"away":"Costa Rica","awayScore":null},{"id":"165098","date":"2018-06-22T15:00:00Z","home":"Nigeria","homeScore":null,"away":"Iceland","awayScore":null},{"id":"165091","date":"2018-06-22T18:00:00Z","home":"Serbia","homeScore":null,"away":"Switzerland","awayScore":null},{"id":"165088","date":"2018-06-23T12:00:00Z","home":"Belgium","homeScore":null,"away":"Tunisia","awayScore":null},{"id":"165089","date":"2018-06-23T15:00:00Z","home":"Korea Republic","homeScore":null,"away":"Mexico","awayScore":null},{"id":"165090","date":"2018-06-23T18:00:00Z","home":"Germany","homeScore":null,"away":"Sweden","awayScore":null},{"id":"165093","date":"2018-06-24T12:00:00Z","home":"England","homeScore":null,"away":"Panama","awayScore":null},{"id":"165095","date":"2018-06-24T15:00:00Z","home":"Japan","homeScore":null,"away":"Senegal","awayScore":null},{"id":"165097","date":"2018-06-24T18:00:00Z","home":"Poland","homeScore":null,"away":"Colombia","awayScore":null},{"id":"165111","date":"2018-06-25T14:00:00Z","home":"Saudi Arabia","homeScore":null,"away":"Egypt","awayScore":null},{"id":"165101","date":"2018-06-25T14:00:00Z","home":"Uruguay","homeScore":null,"away":"Russia","awayScore":null},{"id":"165112","date":"2018-06-25T18:00:00Z","home":"Iran","homeScore":null,"away":"Portugal","awayScore":null},{"id":"165109","date":"2018-06-25T18:00:00Z","home":"Spain","homeScore":null,"away":"Morocco","awayScore":null},{"id":"165113","date":"2018-06-26T14:00:00Z","home":"Denmark","homeScore":null,"away":"France","awayScore":null},{"id":"165107","date":"2018-06-26T14:00:00Z","home":"Australia","homeScore":null,"away":"Peru","awayScore":null},{"id":"165115","date":"2018-06-26T18:00:00Z","home":"Nigeria","homeScore":null,"away":"Argentina","awayScore":null},{"id":"165114","date":"2018-06-26T18:00:00Z","home":"Iceland","homeScore":null,"away":"Croatia","awayScore":null},{"id":"165102","date":"2018-06-27T14:00:00Z","home":"Mexico","homeScore":null,"away":"Sweden","awayScore":null},{"id":"165106","date":"2018-06-27T14:00:00Z","home":"Korea Republic","homeScore":null,"away":"Germany","awayScore":null},{"id":"165116","date":"2018-06-27T18:00:00Z","home":"Serbia","homeScore":null,"away":"Brazil","awayScore":null},{"id":"165108","date":"2018-06-27T18:00:00Z","home":"Switzerland","homeScore":null,"away":"Costa Rica","awayScore":null},{"id":"165104","date":"2018-06-28T14:00:00Z","home":"Japan","homeScore":null,"away":"Poland","awayScore":null},{"id":"165103","date":"2018-06-28T14:00:00Z","home":"Senegal","homeScore":null,"away":"Colombia","awayScore":null},{"id":"165110","date":"2018-06-28T18:00:00Z","home":"Panama","homeScore":null,"away":"Tunisia","awayScore":null},{"id":"165105","date":"2018-06-28T18:00:00Z","home":"England","homeScore":null,"away":"Belgium","awayScore":null},{"id":"165119","date":"2018-06-30T14:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165123","date":"2018-06-30T18:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165122","date":"2018-07-01T14:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165121","date":"2018-07-01T18:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165118","date":"2018-07-02T14:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165120","date":"2018-07-02T18:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165117","date":"2018-07-03T14:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165124","date":"2018-07-03T18:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165127","date":"2018-07-06T14:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165126","date":"2018-07-06T18:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165125","date":"2018-07-07T14:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165128","date":"2018-07-07T18:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165130","date":"2018-07-10T18:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165129","date":"2018-07-11T18:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165131","date":"2018-07-14T14:00:00Z","home":"","homeScore":null,"away":"","awayScore":null},{"id":"165132","date":"2018-07-15T15:00:00Z","home":"","homeScore":null,"away":"","awayScore":null}]'
    );
  });

  it("should get next matches", () => {
    const matchesUpcoming = FixtureService.getMatchesUpcoming(SampleFixtures);
    const nextMatches = FixtureService.getNextMatches(matchesUpcoming);
    expect(nextMatches.length).toEqual(3);

    const result = JSON.stringify(nextMatches);
    // console.log(result);

    expect(result).toEqual(
      '[{"id":"165075","date":"2018-06-17T12:00:00Z","home":"Costa Rica","homeScore":null,"away":"Serbia","awayScore":null},{"id":"165082","date":"2018-06-17T15:00:00Z","home":"Germany","homeScore":null,"away":"Mexico","awayScore":null},{"id":"165070","date":"2018-06-17T18:00:00Z","home":"Brazil","homeScore":null,"away":"Switzerland","awayScore":null}]'
    );
  });
});
