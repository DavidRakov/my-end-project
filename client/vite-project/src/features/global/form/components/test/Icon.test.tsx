import Icon from "../Icon";

import { render, screen } from "@testing-library/react";

describe("Icon test", () => {
  it("renders an icon with the specified text", () => {
    const text = "sample text";

    render(<Icon text={text} />);

    expect(screen.getByText("sample text")).toBeInTheDocument();

    expect(screen.getByTestId("AvatatIcon")).toBeInTheDocument();
  });
  it("check if icon exists inside avatar", () => {
    render(<Icon text={"text"} />);

    const lockOutlinedIcon = screen.getByTestId("lock-outlined-icon");
    const avatar = screen.getByTestId("AvatatIcon");

    expect(avatar).toContainElement(lockOutlinedIcon);
  });
});
