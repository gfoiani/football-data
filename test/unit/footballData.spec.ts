import FootballData from '../../src/FootballData';

describe('FootballData Sdk', () => {
  let sdk: FootballData;
  beforeEach(() => {
    sdk = new FootballData();
  });

  describe('constructor', () => {

    it('should not be undefined', () => {
      expect(sdk).not.toBeUndefined();
    });
  });
});
