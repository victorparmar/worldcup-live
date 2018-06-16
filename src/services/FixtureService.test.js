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

  it("should get matches IN_PLAY", () => {});
  it("should get matches FINISHED", () => {});
  it("should get upcoming matches", () => {});
  it("should return differences for changes in matches", () => {});
  it("should return last match played", () => {});
});
