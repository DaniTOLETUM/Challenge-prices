import React, { Component } from "react";
import { Link } from "react-router-dom";
import AllData from "../../enonce/data.json";

export default class Profile extends Component {
  state = { user: {} };

  componentDidMount() {
    this.setState({ user: AllData.user });
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <React.Fragment>
        <h1>Welcome to the Profile Page</h1>
      </React.Fragment>
    );
  }
}
