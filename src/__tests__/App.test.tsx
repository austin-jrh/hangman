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
  expect(key_a).not.toBeDisabled();

  fireEvent.click(screen.getByTestId("restart-game-button"));
  expect(key_a).not.toBeDisabled();
});
