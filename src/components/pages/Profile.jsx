import React, { Component } from "react";
import { Link } from "react-router-dom";
import AllData from "../../enonce/data.json";

export default class Profile extends Component {
  state = {
    UserData: AllData.user
  };

  render() {
    console.log(this.state.UserData);
    return (
      <React.Fragment>
        <h1>Welcome to the Profile Page</h1>
      </React.Fragment>
    );
  }
}
