import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchResults: []
    };
  }

  returnSearchResults = (query) => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
    .then(response => response.json())
    .then(data => {
      const searchResults = data
      this.setState({ searchResults })
    })
  }

    render() {
      return (
            <div className='App'>
              <HeaderComponent/>
              <FilterComponent/>
              <ListComponent searchResults={this.state.searchResults} />
              <FooterComponent/>
            </div>
      )
    }
  }


export default App;
