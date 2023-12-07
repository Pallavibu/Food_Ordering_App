import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import withPromotedLabel from "../RestaurantCard";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("NOTO - Ice Creams & Desserts");

  expect(name).toBeInTheDocument();
});

it("Should render Restaurant Card component with Promoted Label", () => {
  //render(<withPromotedLabel resData={...props}/>);
  render(<RestaurantCard withPromotedLabel resData={...props} />);

  //const label = screen.getByText("Promoted");

  //const label = screen.getByText(/Promoted/);

  const label = screen.getByRole("label", { name: "Promoted" });

  expect(label).toBeInTheDocument();
});
