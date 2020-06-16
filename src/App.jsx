import React, { Component } from "react";
import Header from "./components/Header/Header";
import PokemonDesk from "./components/PokemonDesk/PokemonDesk";
import Profile from "./components/Profile/Profile";
import pokedex from "./pokedex.json";

console.log(pokedex);

export default class App extends Component {
  state = {
    headerText: "This is my header ts",
    projectName: "Pokemonarium",
    projectDescription: "Gonna catch them all",
    pokemons: pokedex,
    user: {
      username: "Ash",
      countOfPokemons: 0,
      age: "55",
      myCollection: [],
    },
    // myCollection: [],
    auth: false,
  };

  login = () => this.setState({ auth: true });

  myCollection = (name) => {
    console.log(name);
    const { user } = this.state;

    user.myCollection = [...new Set([...user.myCollection, name])];
    user.countOfPokemons = user.myCollection.length;

    this.setState({
      user: {
        ...this.state.user,
        countOfPokemons: user.countOfPokemons,
        myCollection: user.myCollection,
      },
    });
  };

  // sendMessage = (name) => {
  //   console.log("Pokemon name " + name);
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       countOfPokemons: this.state.countOfPokemons + 1,
  //     },
  //   });
  // };

  render() {
    let { projectName, projectDescription, pokemons, user, auth } = this.state;
    return (
      <div>
        <Header title={projectName} desc={projectDescription} />

        <div className="container flex">
          <Profile {...user} auth={auth} login={this.login} />

          <PokemonDesk
            auth={auth}
            pokemons={pokemons}
            myCollection={this.myCollection}
          />
        </div>
      </div>
    );
  }
}
