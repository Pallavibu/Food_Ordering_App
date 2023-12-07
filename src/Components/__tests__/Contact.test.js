import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//test and it both are similar
describe("Contact us page test cases", () => {
  it("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load button in contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should load inputName in contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes in the contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });

  it("should load 2 input boxes in the contact component", () => {
    render(<Contact />);

    const inputBoxes1 = screen.getAllByRole("textbox");

    expect(inputBoxes1.length).not.toBe(3);
  });
});
