import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/profile.css";
import AllData from "../../enonce/data.json";

export default class Profile extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.setState({ user: AllData.user });
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <React.Fragment>
        <h1 className="title is-3">
          Welcome {user.nickname} to your Profile Page
        </h1>
        <div className="card">
          <div className="card-image">
            <img className="image " src="./img/avatar.png" alt="user avatar" />
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{user.nickname}</p>
                <p className="subtitle is-6">{user.email}</p>
              </div>
            </div>
            <div className="content">
              {user.civil_status ? (
                <div className="basic_data">
                  <p>
                    <strong>Firstname: </strong>
                    {user.civil_status.firstname}
                  </p>
                  <p>
                    <strong>Lastname: </strong>
                    {user.civil_status.lastname}
                  </p>
                  <div className="address">
                    <p className="subtitle is-5">Address:</p>
                    <ul>
                      <li>{user.civil_status.address.street}</li>
                      <li>{user.civil_status.address.zipcode}</li>
                      <li>
                        {user.civil_status.address.city},{" "}
                        {user.civil_status.address.country}
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <p>No Personal Data Added</p>
              )}
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Charges
            </a>
            <a href="#" className="card-footer-item">
              Transactions
            </a>
            <a href="#" className="card-footer-item">
              Badges
            </a>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
