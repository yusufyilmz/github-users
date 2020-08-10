import React from "react";
import { screen, fireEvent, render, act } from "@testing-library/react";
import InputBox, { InputBoxProps } from "./InputBox";

describe("Components - TodoList", () => {
  let props: InputBoxProps;
  const renderComponent = (changedProps = {}) => {
    props = { ...props, ...changedProps };
    // eslint-disable-next-line react/jsx-props-no-spreading
    return render(<InputBox {...props} />);
  };

  beforeEach(() => {
    props = { isLoading: false, onClick: jest.fn() };
  });

  it("should change text box value", async () => {
    act(() => {
      renderComponent();
    });

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });

    expect(screen.getByRole("textbox")).toHaveValue("test");
  });

  it("should call onClick function with input value", async () => {
    act(() => {
      renderComponent();
    });

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(props.onClick).toHaveBeenCalledWith("test");
  });
});
