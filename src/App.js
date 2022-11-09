import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./HeaderComponent";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      filterTerm: "date",
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({ filterTerm: event.target.value });
  }

  returnSearchResults = (query) => {
    if (this.state.filterTerm === "author") {
      return fetch(
        `http://hn.algolia.com/api/v1/search?tags=story,author_${query}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(new Date());
          const searchResults = data.hits;
          this.setState({ searchResults });
        });
    }
    fetch(`http://hn.algolia.com/api/v1/search_by_date?query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(new Date());
        const searchResults = data.hits;
        this.setState({ searchResults });
      });
  };
  render() {
    return (
      <div className="App">
        <HeaderComponent searchFunction={this.returnSearchResults} />
        <InputComponent
          handleSelect={this.handleSelect}
          filterTerm={this.state.filterTerm}
        />

        <div>
          <ul>
            <ListComponent searchResults={this.state.searchResults} />
          </ul>
        </div>
        {/* <FooterComponent/> */}
      </div>
    );
  }
}

export default App;
