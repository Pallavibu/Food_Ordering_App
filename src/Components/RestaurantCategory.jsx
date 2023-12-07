import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setshowIndex}) =>
  //console.log("data of individual card", data);

  {
    //const [showItems, setshowItems] = useState(false);
    const handleClick = () => {
      console.log("Clicked");
      setshowIndex();
      // setshowItems(!showItems);
    };
    return (
      <div>
        <div className="w-6/12 mx-auto my-3 bg-green-50 drop-shadow-lg p-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-bold text-lg">
              {data.title} ({data.itemCards.length})
            </span>
            <span>👇</span>
          </div>

          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    );
  };

export default RestaurantCategory;
