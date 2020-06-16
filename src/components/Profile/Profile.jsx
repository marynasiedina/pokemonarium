import React, { Component } from "react";
import "./Profile.scss";

export default class Profile extends Component {
  render() {
    const { username, myCollection, countOfPokemons, auth, login } = this.props;
    console.log(myCollection);

    return auth ? (
      <div className="profile">
        <div className="profile__name">{username}</div>
        <div className="profile__count">{countOfPokemons}</div>
        <div className="profile__collection">
          {myCollection.map((name) => {
            return (
              <img
                className="profile__collection__img"
                src={
                  "https://img.pokemondb.net/artwork/large/" +
                  name.toLowerCase() +
                  ".jpg"
                }
                alt=""
              />
            );
          })}
        </div>
      </div>
    ) : (
      <div className="profile">
        <button onClick={login}>Login</button>
      </div>
    );
  }
}
