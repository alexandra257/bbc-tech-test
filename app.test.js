const wordReverser = require("./wordReverser");

describe("word reverser should", () => {
  it("should reverse the word test", () => {
    // arrange - setting up test data
    const word = "test";
    const expectedResult = "tset";
    // act - performing action you want to test
    const actualResult = wordReverser.reverseWords(word);
    // assert - asserting whether the result of the action is what we expected
    expect(actualResult).toBe(expectedResult);
  });

  it("should reverse the word alex", () => {
    const word = "alex";
    const expectedResult = "xela";
    const actualResult = wordReverser.reverseWords(word);
    expect(actualResult).toBe(expectedResult);
  });

  it("should reverse good night", () => {
    const words = "good night";
    const expectedResult = "doog thgin";
    const actualResult = wordReverser.reverseWords(words);
    expect(actualResult).toBe(expectedResult);
  });

  it("should reverse british broadcasting corporation", () => {
    const words = "british broadcasting corporation";
    const expectedResult = "hsitirb gnitsacdaorb noitaroproc";
    const actualResult = wordReverser.reverseWords(words);
    expect(actualResult).toBe(expectedResult);
  });

  it("should throw an error when Alex is passed in", () => {
    const word = "Alex";
    const actualResult = () => {
      wordReverser.reverseWords(word);
    };
    expect(actualResult).toThrow(Error);
  });

  it("should throw an error when the string contains any uppercase characters", () => {
    const words = "Associate Software Engineer";
    const actualResult = () => {
      wordReverser.reverseWords(words);
    };
    expect(actualResult).toThrow(Error);
  });

  it("should describe the error to the user", () => {
    const words = "Associate Software Engineer";
    const actualResult = () => {
      wordReverser.reverseWords(words);
    };
    expect(actualResult).toThrow(Error("All characters must be lowercase"));
  });

  it("should throw an error when the string contains any numbers", () => {
    const numbers = "8";
    const actualResult = () => {
      wordReverser.reverseWords(numbers);
    };
    expect(actualResult).toThrow(Error("All characters must be lowercase"));
  });

  it("should throw an error when the string contains any symbols", () => {
    const symbols = "@£$$££&^*";
    const actualResult = () => {
      wordReverser.reverseWords(symbols);
    };
    expect(actualResult).toThrow(Error("All characters must be lowercase"));
  });
});
