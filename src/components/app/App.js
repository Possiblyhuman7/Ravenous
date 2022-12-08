import logo from './logo.svg';
import React from "react";
import './App.css';
import "../businesslist/BusinessList";
import "../searchbar/SearchBar";
import SearchBar from '../searchbar/SearchBar';
import BusinessList from '../businesslist/BusinessList';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList /> 
    </div>
  );
}
}

export default App;
