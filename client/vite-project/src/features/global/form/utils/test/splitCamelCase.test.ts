import splitCamelCase from "../splitCamelCase";

describe("splitCamelCase function", () => {
  it("should split normal camel case", () => {
    const result = splitCamelCase("helloWorld");
    assert.equal(result, "hello world");
  });

  it("should handle single letter", () => {
    const result = splitCamelCase("a");
    assert.equal(result, "a");
  });

  it("should handle empty string", () => {
    const result = splitCamelCase("");
    assert.equal(result, "");
  });
});
