import UserContext from "../Utils/UserContext";
import User from "./User";
import Userclass from "./Userclass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor")
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    // console.log("Parent Render")

    //
    return (
      <div>
        LoggedIn :
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>Hellooo</h1>
        <h2>About page</h2>
        <User
          name={"Pallavi in functional component"}
          contact={"pallavibu44"}
          location={"Bangalore"}
        />
        <Userclass
          name={"Pallavi in class based component"}
          location={"Bidar"}
          contact={"pallavi@ineuron"}
        />
        {/* <Userclass
          name={"Deepali in class based component"}
          location={"Pune"}
        /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>Hellooo</h1>
//       <h2>About page</h2>
//       <User name={"Pallavi in functional component"} contact={"pallavibu44"} location={"Bangalore"} />
//       <Userclass name={"Pallavi in class based component"} location={"Bidar"}/>
//     </div>
//   );
// };

export default About;
