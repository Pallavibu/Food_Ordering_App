import { useState } from "react";

const User = (props) => {
//   const [count, setCount] = useState(0);

//   const increament = () => {
//     setCount(count + 1);
//   };
//   const decreament = () => {
//     setCount(count - 1);
//   };
  return (
    <div className="user-card">
      {/* <h1>Count = {count}</h1>
      <button onClick={increament}>Count Increase</button>
      <button onClick={decreament}>Count Decrease</button> */}
      <h2>Name : {props.name} </h2>
      <h2>Contact : {props.contact}</h2>
      <h3>Location : {props.location}</h3>
    </div>
  );
};

export default User;
