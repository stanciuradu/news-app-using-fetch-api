import React, { Component } from "react";
import NewsListLast from "../components/NewsList/NewsListLast";

export class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  //   functia de redirectionare catre pagina a doua din aplicatie
  handleUpdate() {
    window.location.replace("/");
  }
  componentDidMount() {
    fetch("http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8")
      .then((response) => response.json())
      .then((json) => {
        this.setState(json);
      });
    // pentru redirectionarea catre o alta pagina dupa 15sec ->folosesc setTimeout()
    setTimeout(() => this.handleUpdate(), 180000);
  }
  render() {
    return (
      <div>
        <NewsListLast news={this.state.news} />
      </div>
    );
  }
}

export default SecondPage;
