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
    return (
      <div>
        <Home />
        <div className="row">
        <SortMenu /><CarList cars={this.props.cars} />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
