import "@testing-library/jest-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "../App";

afterEach(() => {
  cleanup();
});

test("to check if all components are present", () => {
  render(<App />);

  expect(screen.getByTestId("restart-game-button")).toBeInTheDocument();
  expect(screen.getByTestId("hangman-drawing")).toBeInTheDocument();
  expect(screen.getByTestId("hangman-word")).toBeInTheDocument();
  expect(screen.getByTestId("keyboard")).toBeInTheDocument();
});

it("should click 'a' key, and then restart game", () => {
  render(<App />);

  const key_a = screen.getByTestId("key-a");
  fireEvent.click(key_a);
  expect(key_a).toBeDisabled();

  fireEvent.click(screen.getByTestId("restart-game-button"));
  expect(key_a).not.toBeDisabled();
});

test("when click 'a' key, it should appear either in word or in drawing", () => {
  render(<App />);

  const key_a = screen.getByTestId("key-a");
  fireEvent.click(key_a);

  if (
    screen.getAllByTestId(/letter-index-*/).some((letter) => {
      return letter.textContent === "a";
    })
  ) {
    console.log("appear in word");
    expect(true).toBe(true); // appear in HangmanWord
  } else {
    console.log("appear in drawing");
    expect(screen.getByTestId("hman-head")).toBeInTheDocument(); // appear in HangmanDrawing
  }
});
