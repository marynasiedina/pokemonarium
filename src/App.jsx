import React, { Component } from "react";
import Header from "./components/Header/Header";
import PokemonDesk from "./components/PokemonDesk/PokemonDesk";
import Profile from "./components/Profile/Profile";
import pokedex from "./pokedex.json";
import api from "./components/config/api";

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
    pokemon: null,
  };

  login = () => this.setState({ auth: true });

  myCollection = (name) => {
    const { user } = this.state;

    let myCollection = [...new Set([...user.myCollection, name])];
    let countOfPokemons = myCollection.length;

    this.setState({
      user: {
        ...this.state.user,
        countOfPokemons: countOfPokemons,
        myCollection: myCollection,
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
  updatePokemonList = () => {
    api.get("pokemon/5");
  };

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

  componentDidMount() {
    api.get("pokemon/2").then(({ data }) => console.log(data));
  }
}
