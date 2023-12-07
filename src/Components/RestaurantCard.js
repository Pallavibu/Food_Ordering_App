import { CDN_LINK } from "../Utils/constant";
//import UserContext from "../Utils/UserContext";
//import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("mockdata", resData);

  const { cloudinaryImageId, name, cuisines, areaName, costForTwo, avgRating } =
    resData?.info;
  //const { loggedInUser } = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-md"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      {/* <h1>{loggedInUser}</h1> */}
    </div>
  );
};

//Higher order components
//input RestaurantCard =>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  // returning another component
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-md m-2 p-2">
          Promoted
        </label>
        {/* spread operator */}
        {/* enhanced component */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
