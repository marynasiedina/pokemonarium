import React, { Component } from "react";
import Pokemon from "../Pokemon/Pokemon";
import SelectLang from "../SelectLang/SelectLang";
import "./PokemonDesk.scss";

export default class PokemonDesk extends Component {
  state = {
    lang: "english",
  };

  changeLang = (event) => {
    console.log(event);
    this.setState({ lang: event.target.value });
  };

  render() {
    let { pokemons, auth, myCollection } = this.props;

    return (
      <section className="pokedesk">
        <SelectLang lang={this.state.lang} changeLang={this.changeLang} />

        <div className="pokedesk__list">
          {pokemons.map((el) => {
            return (
              <Pokemon
                myCollection={myCollection}
                auth={auth}
                pokemon={el}
                key={el.id}
                lang={this.state.lang}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
