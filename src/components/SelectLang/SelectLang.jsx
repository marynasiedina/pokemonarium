import React, { Component } from "react";

export default class SelectLang extends Component {
  state = {
    langList: ["english", "french", "japanese", "chinese"],
  };

  render() {
    let { lang, changeLang } = this.props;
    let { langList } = this.state;

    let options = langList.map((el) => (
      <option value={el} key={el}>
        {el}
      </option>
    ));

    return (
      <select value={lang} onChange={changeLang}>
        {options}
      </select>
    );
  }
}
