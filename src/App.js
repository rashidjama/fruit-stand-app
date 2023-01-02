import './App.css';
import React, { Component } from 'react'
import FruitsList from './FruitsList';
import fruits from './fruits';
import SearchBox from './SearchBox';
import ScrollBar from './ScrollBar';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fruits: fruits,
      searchField: ''
    }
  }
  onSearch = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const filteredFruits = this.state.fruits.filter(fruit => {
      return fruit.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })
    return(
      <div className="App">
      <h1>Fruits Stand</h1>
      <SearchBox onSearch={this.onSearch}/>
      <ScrollBar>
        <ErrorBoundry>
        <FruitsList fruits={ filteredFruits }/>
        </ErrorBoundry>
      </ScrollBar>
    </div>
    )
  }
}

export default App;
