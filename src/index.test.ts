import { describe, expect, it } from "vitest";
import { name } from "./index";

describe("basic test", () => {
  it("should be true", () => {
    expect(name).toBe("my-lib");
  });
});
