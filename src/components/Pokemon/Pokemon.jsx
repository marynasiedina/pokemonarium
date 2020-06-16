import React, { Component } from "react";
import "./Pokemon.scss";

export default class Pokemon extends Component {
  render() {
    let { lang, auth, myCollection } = this.props;
    let { name, type, base } = this.props.pokemon;

    //Получить все свойства покемонов
    // let propsList = [];
    // for (let prop in base) {
    //   propsList.push(
    //     <li className="pokemon__base-item" key={prop}>
    //       <span className="pokemon__prop">{prop}: </span>
    //       <span className="pokemon__prop-value">{base[prop]}</span>
    //     </li>
    //   );
    // }

    let propsList = Object.keys(base);

    return (
      <div className="pokemon">
        {auth && (
          <div className="add">
            <button onClick={() => myCollection(name.english)}>Add</button>
          </div>
        )}
        <img
          src={
            "https://img.pokemondb.net/artwork/large/" +
            name.english.toLowerCase() +
            ".jpg"
          }
          alt=""
          width="200px"
        />
        <h4 className="pokemon__name">{name[lang]}</h4>
        <h5 className="pokemon__type">{type.join(", ")}</h5>
        <ul className="pokemon__base">
          {propsList.map((prop) => (
            <li className="pokemon__base-item" key={prop}>
              <span className="pokemon__prop">{prop}: </span>
              <span className="pokemon__prop-value">{base[prop]}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
