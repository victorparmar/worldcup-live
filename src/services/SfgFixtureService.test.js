import SfgFixtureService from "./SfgFixtureService";
import SampleMatches from "./sample-matches";

describe("SfgFixtureService", () => {
  it("should fetch fixtures", async () => {
    try {
      const fixtures = await SfgFixtureService.fetchFixtures();
      expect(fixtures.count).toEqual(64);
    } catch (err) {
      console.error(err); // try not to rely on the network for tests
    }
  });

  it("should get matches IN_PLAY", () => {
    const matchesInPlay = SfgFixtureService.getMatchesInPlay(SampleMatches);
    const result = JSON.stringify(matchesInPlay);
    // console.log(result);
    expect(result).toEqual(
      '[{"id":"300331499","date":"2018-06-18T12:00:00Z","home":"Sweden","homeScore":1,"away":"Korea Republic","awayScore":0,"time":"88\'"}]'
    );
  });

  it("should get matches FINISHED", () => {
    const matchesFinished = SfgFixtureService.getMatchesFinished(SampleMatches);
    const result = JSON.stringify(matchesFinished);
    // console.log(result);
    expect(result).toEqual(
      '[{"id":"300331503","date":"2018-06-14T15:00:00Z","home":"Russia","homeScore":5,"away":"Saudi Arabia","awayScore":0,"time":"full-time"},{"id":"300353632","date":"2018-06-15T12:00:00Z","home":"Egypt","homeScore":0,"away":"Uruguay","awayScore":1,"time":"full-time"},{"id":"300331526","date":"2018-06-15T15:00:00Z","home":"Morocco","homeScore":0,"away":"Iran","awayScore":1,"time":"full-time"},{"id":"300331524","date":"2018-06-15T18:00:00Z","home":"Portugal","homeScore":3,"away":"Spain","awayScore":3,"time":"full-time"},{"id":"300331533","date":"2018-06-16T10:00:00Z","home":"France","homeScore":2,"away":"Australia","awayScore":1,"time":"full-time"},{"id":"300331515","date":"2018-06-16T13:00:00Z","home":"Argentina","homeScore":1,"away":"Iceland","awayScore":1,"time":"full-time"},{"id":"300331528","date":"2018-06-16T16:00:00Z","home":"Peru","homeScore":0,"away":"Denmark","awayScore":1,"time":"full-time"},{"id":"300331523","date":"2018-06-16T19:00:00Z","home":"Croatia","homeScore":2,"away":"Nigeria","awayScore":0,"time":"full-time"},{"id":"300331529","date":"2018-06-17T12:00:00Z","home":"Costa Rica","homeScore":0,"away":"Serbia","awayScore":1,"time":"full-time"},{"id":"300331502","date":"2018-06-17T15:00:00Z","home":"Germany","homeScore":0,"away":"Mexico","awayScore":1,"time":"full-time"},{"id":"300331525","date":"2018-06-17T18:00:00Z","home":"Brazil","homeScore":1,"away":"Switzerland","awayScore":1,"time":"full-time"}]'
    );
  });

  it("should get upcoming matches", () => {
    const matchesUpcoming = SfgFixtureService.getMatchesUpcoming(SampleMatches);
    const result = JSON.stringify(matchesUpcoming);
    // console.log(result);
    expect(result).toEqual(
      '[{"id":"300331539","date":"2018-06-18T15:00:00Z","home":"Belgium","homeScore":0,"away":"Panama","awayScore":0,"time":null},{"id":"300331554","date":"2018-06-18T18:00:00Z","home":"Tunisia","homeScore":0,"away":"England","awayScore":0,"time":null},{"id":"300331550","date":"2018-06-19T12:00:00Z","home":"Colombia","homeScore":0,"away":"Japan","awayScore":0,"time":null},{"id":"300331545","date":"2018-06-19T15:00:00Z","home":"Poland","homeScore":0,"away":"Senegal","awayScore":0,"time":null},{"id":"300331495","date":"2018-06-19T18:00:00Z","home":"Russia","homeScore":0,"away":"Egypt","awayScore":0,"time":null},{"id":"300331511","date":"2018-06-20T12:00:00Z","home":"Portugal","homeScore":0,"away":"Morocco","awayScore":0,"time":null},{"id":"300331530","date":"2018-06-20T15:00:00Z","home":"Uruguay","homeScore":0,"away":"Saudi Arabia","awayScore":0,"time":null},{"id":"300331496","date":"2018-06-20T18:00:00Z","home":"Iran","homeScore":0,"away":"Spain","awayScore":0,"time":null},{"id":"300331518","date":"2018-06-21T12:00:00Z","home":"Denmark","homeScore":0,"away":"Australia","awayScore":0,"time":null},{"id":"300331527","date":"2018-06-21T15:00:00Z","home":"France","homeScore":0,"away":"Peru","awayScore":0,"time":null},{"id":"300331513","date":"2018-06-21T18:00:00Z","home":"Argentina","homeScore":0,"away":"Croatia","awayScore":0,"time":null},{"id":"300331540","date":"2018-06-22T12:00:00Z","home":"Brazil","homeScore":0,"away":"Costa Rica","awayScore":0,"time":null},{"id":"300331497","date":"2018-06-22T15:00:00Z","home":"Nigeria","homeScore":0,"away":"Iceland","awayScore":0,"time":null},{"id":"300340183","date":"2018-06-22T18:00:00Z","home":"Serbia","homeScore":0,"away":"Switzerland","awayScore":0,"time":null},{"id":"300331547","date":"2018-06-23T12:00:00Z","home":"Belgium","homeScore":0,"away":"Tunisia","awayScore":0,"time":null},{"id":"300331549","date":"2018-06-23T15:00:00Z","home":"Korea Republic","homeScore":0,"away":"Mexico","awayScore":0,"time":null},{"id":"300331501","date":"2018-06-23T18:00:00Z","home":"Germany","homeScore":0,"away":"Sweden","awayScore":0,"time":null},{"id":"300331546","date":"2018-06-24T12:00:00Z","home":"England","homeScore":0,"away":"Panama","awayScore":0,"time":null},{"id":"300331505","date":"2018-06-24T15:00:00Z","home":"Japan","homeScore":0,"away":"Senegal","awayScore":0,"time":null},{"id":"300331508","date":"2018-06-24T18:00:00Z","home":"Poland","homeScore":0,"away":"Colombia","awayScore":0,"time":null},{"id":"300331516","date":"2018-06-25T14:00:00Z","home":"Uruguay","homeScore":0,"away":"Russia","awayScore":0,"time":null},{"id":"300331509","date":"2018-06-25T14:00:00Z","home":"Saudi Arabia","homeScore":0,"away":"Egypt","awayScore":0,"time":null},{"id":"300340184","date":"2018-06-25T18:00:00Z","home":"Spain","homeScore":0,"away":"Morocco","awayScore":0,"time":null},{"id":"300331500","date":"2018-06-25T18:00:00Z","home":"Iran","homeScore":0,"away":"Portugal","awayScore":0,"time":null},{"id":"300331512","date":"2018-06-26T14:00:00Z","home":"Denmark","homeScore":0,"away":"France","awayScore":0,"time":null},{"id":"300331506","date":"2018-06-26T14:00:00Z","home":"Australia","homeScore":0,"away":"Peru","awayScore":0,"time":null},{"id":"300331519","date":"2018-06-26T18:00:00Z","home":"Nigeria","homeScore":0,"away":"Argentina","awayScore":0,"time":null},{"id":"300331510","date":"2018-06-26T18:00:00Z","home":"Iceland","homeScore":0,"away":"Croatia","awayScore":0,"time":null},{"id":"300331532","date":"2018-06-27T14:00:00Z","home":"Korea Republic","homeScore":0,"away":"Germany","awayScore":0,"time":null},{"id":"300331548","date":"2018-06-27T14:00:00Z","home":"Mexico","homeScore":0,"away":"Sweden","awayScore":0,"time":null},{"id":"300331534","date":"2018-06-27T18:00:00Z","home":"Switzerland","homeScore":0,"away":"Costa Rica","awayScore":0,"time":null},{"id":"300331521","date":"2018-06-27T18:00:00Z","home":"Serbia","homeScore":0,"away":"Brazil","awayScore":0,"time":null},{"id":"300331507","date":"2018-06-28T14:00:00Z","home":"Japan","homeScore":0,"away":"Poland","awayScore":0,"time":null},{"id":"300331553","date":"2018-06-28T14:00:00Z","home":"Senegal","homeScore":0,"away":"Colombia","awayScore":0,"time":null},{"id":"300331520","date":"2018-06-28T18:00:00Z","home":"Panama","homeScore":0,"away":"Tunisia","awayScore":0,"time":null},{"id":"300340182","date":"2018-06-28T18:00:00Z","home":"England","homeScore":0,"away":"Belgium","awayScore":0,"time":null},{"id":"300331537","date":"2018-06-30T21:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331544","date":"2018-07-01T01:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331517","date":"2018-07-01T21:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331498","date":"2018-07-02T01:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331535","date":"2018-07-02T22:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331551","date":"2018-07-03T01:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331514","date":"2018-07-03T21:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331542","date":"2018-07-04T01:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331543","date":"2018-07-06T21:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331538","date":"2018-07-07T01:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331541","date":"2018-07-07T22:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331504","date":"2018-07-08T01:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331531","date":"2018-07-11T01:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331522","date":"2018-07-12T01:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331536","date":"2018-07-14T21:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null},{"id":"300331552","date":"2018-07-15T22:00:00Z","home":"To Be Determined","away":"To Be Determined","time":null}]'
    );
  });

  it("should get next matches", () => {
    const matchesUpcoming = SfgFixtureService.getMatchesUpcoming(SampleMatches);
    const nextMatches = SfgFixtureService.getNextMatches(matchesUpcoming);
    expect(nextMatches.length).toEqual(2);

    const result = JSON.stringify(nextMatches);
    // console.log(result);

    expect(result).toEqual(
      '[{"id":"300331539","date":"2018-06-18T15:00:00Z","home":"Belgium","homeScore":0,"away":"Panama","awayScore":0,"time":null},{"id":"300331554","date":"2018-06-18T18:00:00Z","home":"Tunisia","homeScore":0,"away":"England","awayScore":0,"time":null}]'
    );
  });
});
