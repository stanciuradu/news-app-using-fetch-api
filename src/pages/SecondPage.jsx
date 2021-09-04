import React, { Component } from "react";
import NewsListSecond from "../components/NewsList/NewsListSecond";

export class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  // functia de rdirctionare catre ultima pagina
  handleredirectPage() {
    window.location.replace("/last_page");
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
        <NewsListSecond news={this.state.news} />
      </div>
    );
  }
}

export default SecondPage;
