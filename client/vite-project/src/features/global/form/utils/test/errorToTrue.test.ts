import { FieldError } from "react-hook-form";
import errorToTrue from "../errorToTrue";

describe("errorToTrue function", () => {
  it("test 1 errorTotrue", () => {
    const error: FieldError = {
      type: "required",
      message: "This field is required",
    };
    const result1 = errorToTrue(error);
    assert.equal(result1.error, true, "Test case 1 failed");

    const result2 = errorToTrue(undefined);
    assert.equal(result2.error, false, "Test case 2 failed");
  });
});
