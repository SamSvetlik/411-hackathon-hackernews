import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import ListComponent from './ListComponent'

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
      const searchResults = data.hits
      this.setState({ searchResults })
    })
  }

    render() {
      return (
            <div className='App'>
              <HeaderComponent searchFunction={this.returnSearchResults}/>
              {/* <FilterComponent/> */}
              <div>
                <ul>
                  <ListComponent searchResults={this.state.searchResults} />
                </ul>
              </div>
              {/* <FooterComponent/> */}
            </div>
      )
    }
  }


export default App;
