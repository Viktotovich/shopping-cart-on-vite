/*you don't need to import these btw, they're global.
The only reason I've kept the import is as a reminder
of available test-function */
import { describe, it, expect } from "vitest";
import App from "../src/App";
import { render } from "@testing-library/react";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug;
  });
});

//barebones test to make sure everything is fine and dandy
