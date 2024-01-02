import { render, screen, waitFor } from "@testing-library/react";
import WaitingComponent from "../WaitingComponent";
import { formStyle } from "../../styles/formStyle";
describe("waiting component", () => {
  it("renders correctly", () => {
    render(<WaitingComponent />);
    const box = screen.getByRole("img");
    expect(box).toBeInTheDocument();
    expect(box).toHaveAttribute("src", "https://i.gifer.com/VZvw.gif");
  });
});
