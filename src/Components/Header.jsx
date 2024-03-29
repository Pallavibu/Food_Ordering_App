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
    <div className="flex py-4 justify-end gap-12 sm:bg-yellow-300 md:bg-purple-300 lg:bg-pink-300 ">
      <div className="logo-container mx-auto ">
        <img className=" sm:w-16 sm:m-4   " src={LOGO_LINK} />
      </div>

      <div className="mx-auto ">
        <ul className={"flex p-2 m-2 justify-end ${isListVisible ? 'block' : 'hidden'} " }>
          <li className="flex px-2 ">
            Status :  
            {onlineStatus ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
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
          <li className="px-3 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 ">
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
          <li className="px-3 font-bold ">{loggedInUser}</li>
        </ul>

       
      </div>
    </div>
  );
};
export default Header;
