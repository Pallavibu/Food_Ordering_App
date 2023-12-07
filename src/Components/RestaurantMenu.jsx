import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // console.log(param);

  const resInfo = useRestaurantMenu(resId);
  //console.log(resInfo);

  const [showIndex, setshowIndex] = useState(null);
  if (resInfo === null) return;
  <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    [];
  // console.log( resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //   ?.card );
  console.log(
    "Pallavi",
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  // const category2 =
  //   resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  //   );
  const category1 = (
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  )?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log("dishes", category1);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {category1.map((category1, index) => (
        <RestaurantCategory
          //Controlled Component
          key={category1.card.card.title}
          data={category1.card.card}
          showItems={index == showIndex ? true : false}
          setshowIndex = {() => {setshowIndex(index)}}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
