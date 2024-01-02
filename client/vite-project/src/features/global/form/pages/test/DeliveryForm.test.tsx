import DeliveryForm from "../DeliveryForm";
import { render, fireEvent } from "@testing-library/react";

describe("DeliveryForm component", () => {
  it("renders without errors", () => {
    const { container } = render(<DeliveryForm />);
    assert.notEqual(container.innerHTML, "");
  });

  it("submits the form successfully", () => {
    const { getByText } = render(<DeliveryForm />);
    const submitButton = getByText("Buy");

    fireEvent.click(submitButton);
  });
});
