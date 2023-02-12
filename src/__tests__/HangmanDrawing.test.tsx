import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { HangmanDrawing } from "../components/HangmanDrawing";

afterEach(() => {
  cleanup();
});

describe("<HangmanDrawing />", () => {
  it("should render hangman stand", () => {
    render(<HangmanDrawing numberOfGuesses={0} />);
    expect(screen.getByTestId("stand-hook")).toBeInTheDocument();
    expect(screen.getByTestId("stand-pole")).toBeInTheDocument();
    expect(screen.getByTestId("stand-base")).toBeInTheDocument();
    expect(screen.getByTestId("stand-top-piece")).toBeInTheDocument();

    expect(screen.queryByTestId("hman-head")).toBeNull();
  });

  it("should render head but not body", () => {
    render(<HangmanDrawing numberOfGuesses={1} />);
    expect(screen.getByTestId("hman-head")).toBeInTheDocument();
    expect(screen.queryByTestId("hman-body")).toBeNull();
  });

  it("should render body and previous but not right arm", () => {
    render(<HangmanDrawing numberOfGuesses={2} />);
    expect(screen.getByTestId("hman-head")).toBeInTheDocument();
    expect(screen.getByTestId("hman-body")).toBeInTheDocument();
    expect(screen.queryByTestId("hman-right-arm")).toBeNull();
  });

  it("should render right arm and previous but not left arm", () => {
    render(<HangmanDrawing numberOfGuesses={3} />);
    expect(screen.getByTestId("hman-head")).toBeInTheDocument();
    expect(screen.getByTestId("hman-body")).toBeInTheDocument();
    expect(screen.getByTestId("hman-right-arm")).toBeInTheDocument();
    expect(screen.queryByTestId("hman-left-arm")).toBeNull();
  });

  it("should render left arm and previous but not right leg", () => {
    render(<HangmanDrawing numberOfGuesses={4} />);
    expect(screen.getByTestId("hman-head")).toBeInTheDocument();
    expect(screen.getByTestId("hman-body")).toBeInTheDocument();
    expect(screen.getByTestId("hman-right-arm")).toBeInTheDocument();
    expect(screen.getByTestId("hman-left-arm")).toBeInTheDocument();
    expect(screen.queryByTestId("hman-right-leg")).toBeNull();
  });

  it("should render right leg and previous but not left leg", () => {
    render(<HangmanDrawing numberOfGuesses={5} />);
    expect(screen.getByTestId("hman-head")).toBeInTheDocument();
    expect(screen.getByTestId("hman-body")).toBeInTheDocument();
    expect(screen.getByTestId("hman-right-arm")).toBeInTheDocument();
    expect(screen.getByTestId("hman-left-arm")).toBeInTheDocument();
    expect(screen.getByTestId("hman-right-leg")).toBeInTheDocument();
    expect(screen.queryByTestId("hman-left-leg")).toBeNull();
  });

  it("should render left leg and previous", () => {
    render(<HangmanDrawing numberOfGuesses={6} />);
    expect(screen.getByTestId("hman-head")).toBeInTheDocument();
    expect(screen.getByTestId("hman-body")).toBeInTheDocument();
    expect(screen.getByTestId("hman-right-arm")).toBeInTheDocument();
    expect(screen.getByTestId("hman-left-arm")).toBeInTheDocument();
    expect(screen.getByTestId("hman-right-leg")).toBeInTheDocument();
    expect(screen.getByTestId("hman-left-leg")).toBeInTheDocument();
  });
});
