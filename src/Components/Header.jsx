import { HAMBURGER, LOGO_LINK } from "../Utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

//Tailwind
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const [isListVisible, setListVisibility] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log("cartitems array", cartItems);

  const handleImageClick = () => {
    setListVisibility(!isListVisible);

    console.log(isListVisible);
  };
  return (
    <div className="sm:flex py-5 justify-end gap-10 sm:bg-yellow-300 md:bg-purple-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-500">
      <div className="logo-container mx-auto ">
        <img className="w-28 sm:w-16 sm:p-2 " src={LOGO_LINK} />
      </div>

      <div className="mx-auto ">
        <ul className={"flex p-2 m-2 justify-end ${isListVisible ? 'block' : 'hidden'} sm:hidden md:block"}>
          <li className="flex px-2 ">
            Status :
            {onlineStatus ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                style={{ verticalAlign: "middle" }}
              >
                <circle cx="25" cy="25" r="20" fill="green" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                style={{ verticalAlign: "middle" }}
              >
                <circle cx="25" cy="25" r="20" fill="red" />
              </svg>
            )}
          </li>
          <li className="px-2.5 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2.5 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2.5 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2.5 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2.5 text-xl ">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login "
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-2.5 font-bold ">{loggedInUser}</li>
        </ul>

        <div className="sm:block sm md:hidden  ">
          <img
            className="w-16 top-4 right-1"
            src={HAMBURGER}
            alt="Clickable image"
            onClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
