import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Xavier" />);
    const textElement = screen.getByText("Hello Xavier");
    expect(textElement).toBeInTheDocument();
  });
});
