import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Keyboard } from "../components/Keyboard";

afterEach(() => {
  cleanup();
});

describe("<Keyboard />", () => {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  it("should have all keyboard keys present", () => {
    let activeLetters: string[] = [];
    const inactiveLetters: string[] = [];
    render(
      <Keyboard
        disabled={false}
        activeLetters={activeLetters}
        inactiveLetters={inactiveLetters}
        addGuessedLetter={(key) => {
          activeLetters = [...activeLetters, key];
        }}
      />
    );
    // Expect all keys to be present, and to be clickable
    KEYS.forEach((key) => {
      const testKey = screen.getByTestId(`key-${key}`);
      fireEvent.click(testKey);
      expect(activeLetters.includes(key)).toBe(true);
    });
  });

  it("should not be able to click disabled keyboard keys", () => {
    let activeLetters: string[] = ["a", "b", "c"];
    const inactiveLetters: string[] = ["d", "e", "f"];

    render(
      <Keyboard
        disabled={false}
        activeLetters={activeLetters}
        inactiveLetters={inactiveLetters}
        addGuessedLetter={(key) => {
          activeLetters = [...activeLetters, key];
        }}
      />
    );

    // test "active" letters to be disabled
    ["a", "b", "c"].forEach((key) => {
      const testKey = screen.getByTestId(`key-${key}`);
      expect(testKey).toBeDisabled();
    });

    // test "inactive" letters to be disabled
    ["d", "e", "f"].forEach((key) => {
      const testKey = screen.getByTestId(`key-${key}`);
      expect(testKey).toBeDisabled();
    });

    // test neutral letters to be enabled
    ["g", "h", "i"].forEach((key) => {
      const testKey = screen.getByTestId(`key-${key}`);
      expect(testKey).not.toBeDisabled();
    });
  });
});
