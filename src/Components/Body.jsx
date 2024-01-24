import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
// import resObj from "../Utils/mockData";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  console.log("listof Restaurant : ", listOfRestaurants);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Promotion :", RestaurantCardPromoted);

  useEffect(() => {
    fetchData();
  }, []);

  //console.log(listOfRestaurants);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0463695&lng=77.721237&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("fetch data : ", json);
    //const Pallavi = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
    // setlistOfRestaurants(dataa);
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );

    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );

    console.log("listOfRestaurants:", listOfRestaurants);
    console.log("filteredRestaurant:", filteredRestaurant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like something went wrong!!!</h1>;
  }
  //Ternary Operator

  const { loggedInUser, setuserName } = useContext(UserContext);

  if (!listOfRestaurants) {
    return <Shimmer />;
  }

  return (
    <div className="body  ">
      <div className="filter flex">
        <div className="search mx-10 p-5">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-2 flex items-center">
          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              console.log("hello");
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );

              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restuarants
          </button>
        </div>
        <div className="m-4 p-2 flex items-center">
          <label>User name : </label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap gap-2 sm:gap-x-12 md:gap-x-2 mx-8 sm:flex-wrap sm:mx-16 md:flex-wrap md:mx-10">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.header ||
            restaurant?.info?.aggregatedDiscountInfoV2?.header ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
