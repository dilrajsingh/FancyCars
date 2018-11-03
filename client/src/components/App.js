import React, { Component } from 'react';
import Home from './Home';

import CarList from './CarList';
import SortMenu from './SortMenu';

import { connect } from 'react-redux';
import * as actions from '../actions';
import '../stylesheets/index.css';

class App extends Component {
  componentDidMount() {
    this.props.getCars();
  }

  render() {

    const { error, loading } = this.props; 

    if (error) {
      return <span>Error! Error Message: {error.message}</span>;
    }
  
    if (loading) {
      return <span> Loading...</span>;
    }
    return (
      <div>
      <Home key="header" />
      <SortMenu />
      <div className="row" key="main">
        <CarList cars={this.props.cars} />
      </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
