import React, { Component } from 'react';
import './App.css';

import { SearchBar } from './Components/SearchBar/SearchBar';
import CardList from './Components/CardList/CardList';

class App extends Component {

  state = {
    originalList: [],
    showList: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({
        originalList: data,
        showList: data,
      }))
      .catch(er => console.log("Error while fetching data ", er))
  }

  filterList = ev => {
    let str = ev.target.value;

    str = str && str.toLowerCase();

    let newList = this.state.originalList.filter(el => el.name.toLowerCase().startsWith(str));

    this.setState({
      showList: newList
    });

  }

  render() {
    return (
      <div className="App" >
        <SearchBar filterList={this.filterList} />
        <CardList userList={this.state.showList} />
      </div>
    )
  }
}



export default App;
