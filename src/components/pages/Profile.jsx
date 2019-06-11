import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/profile.css";
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
        <h1>Welcome {user.nickname} to the Profile Page</h1>
        <div class="card">
          <div class="card-image">
            <img class="image " src="./img/avatar.png" alt="user avatar" />
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{user.nickname}</p>
                <p class="subtitle is-6">{user.email}</p>
              </div>
            </div>
            <div class="content">
              {user.civil_status ? (
                <div>
                  <p>Firstname: {user.civil_status.firstname}</p>
                  <p>Lastname: {user.civil_status.lastname}</p>
                  Adress:
                  <ul>
                    <li>{user.civil_status.address.street}</li>
                    <li>{user.civil_status.address.zipcode}</li>
                    <li>
                      {user.civil_status.address.city},{" "}
                      {user.civil_status.address.country}
                    </li>
                  </ul>
                </div>
              ) : (
                <p>No Personal Data Added</p>
              )}
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">
              Charges
            </a>
            <a href="#" class="card-footer-item">
              Transactions
            </a>
            <a href="#" class="card-footer-item">
              Badges
            </a>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
