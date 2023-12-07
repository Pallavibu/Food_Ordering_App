import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.name + "Child Constructor")
    // this.state = {
    //   count: 0,
    //   count1: 1,
    // };
    this.state = {                        //state variables
        userInfo: {                       //local state variables
            name : "random",
            followers : "default",
            // avatar_url : "https//dummy"
        },
};
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child ComponentDidMount")
    const data = await fetch("https://api.github.com/users/Pallavibu");
    const json = await data.json();
    console.log(json);

    this.setState({                 //update the state variables i.e setState
        userInfo : json
    })
  }

  render() {
    //console.log(this.props.name + "Child Render")
    //const { name, location, contact } = this.props;
    // const { count} = this.state;
    const{name, followers, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h3>Count : {count}</h3> */}
        {/*       
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            // this.setState({ count: this.state.count1 - 1 });
          }}
        >
          Count Increament
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Count Decrease
        </button> */}

        <h2>Name : {name}</h2>
       <h3>Location : {followers}</h3>
       <h3>{avatar_url}</h3>
      </div>
    );
  }
}

export default Userclass;
