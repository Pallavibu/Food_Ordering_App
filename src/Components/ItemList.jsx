import { useDispatch } from "react-redux";
import { addItem } from "../redux-toolkit/cartSlice";
import { CDN_LINK } from "../Utils/constant";

const ItemList = ({ items }) => {
  console.log("items", items);

  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    // Dispatch an action
    // pizza goes in to action.payload
    dispatch(addItem(items));
  };

  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{items.card.info.name}</span>
              <span>
                - ₹
                {items.card.info.price / 100 ||
                  items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button
                className="px-4 py-1 mx-9 my-16 bg-black text-white rounded-lg shadow-lg text-xs "
                onClick={() => handleAddItem(items)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_LINK + items.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
