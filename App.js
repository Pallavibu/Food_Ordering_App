import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import UserContext from "./src/Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/redux-toolkit/appStore";
import Cart from "./src/Components/Cart";
//import Grocery from "./src/Components/Grocery";

//lazy loading
//Ondemand loading

const Grocery = lazy(() => import("./src/Components/Grocery"));

const AppLayout = () => {
  const [userName, setuserName] = useState();
  //authentication
  useEffect(() => {
    // API fetching
    const data = {
      name: "Pallavi",
    };
    setuserName(data.name);
  }, []);

  return (
    //Default Value
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading !!!...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
