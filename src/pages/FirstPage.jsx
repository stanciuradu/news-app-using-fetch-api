import React, { Component } from "react";
import NewsListFirst from "../components/NewsList/NewsListFirst";

export class FirstPage extends Component {
  constructor() {
    super();
    this.state = {
      // initial, array-ul este gol pana ce datele vin de la back-end
      news: [],
    };
  }
  // functia de redirectionare catre pagina a doua din aplicatie
  handleredirectPage() {
    window.location.replace("/second_page");
  }
  componentDidMount() {
    fetch("http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8")
      .then((response) => response.json())
      .then((json) => {
        this.setState(json);
      });
    setTimeout(() => this.handleredirectPage(), 15000);
  }
  render() {
    return (
      <div>
        <NewsListFirst news={this.state.news} />
      </div>
    );
  }
}

export default FirstPage;
