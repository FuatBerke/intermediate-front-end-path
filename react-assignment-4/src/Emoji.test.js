import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Header from "./Header";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

// TEST 1
test("Has the Header been rendered?", () => {
  render(<Header />);
  const header = screen.getByText("Emoji Search");
  expect(header).toBeInTheDocument();
});

//  TEST 2
test("Has the Emojis been rendered?", () => {
  render(<App />);
  const emoji1 = screen.getByText("100");
  expect(emoji1).toBeInTheDocument();
});

// TEST 3
test("Filter Emoji", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Search Emoji");
  const emoji1 = "100";

  act(() => userEvent.type(inputElement, emoji1));
  expect(screen.getByText(emoji1)).toBeInTheDocument();
});

// TEST 4
describe("emoji copy", () => {
  test("Emoji Clipboard", () => {
    render(<App />);
    const emoji1 = screen.getByText("100");

    act(() => userEvent.click(emoji1.parentElement));
    expect(emoji1.parentElement.getAttribute("data-clipboard-text")).toMatch(
      "💯"
    );
  });
});
