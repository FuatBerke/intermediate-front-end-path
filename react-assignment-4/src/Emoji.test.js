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
