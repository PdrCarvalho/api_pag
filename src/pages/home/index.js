import React, { Component } from 'react';
import Maps from '../maps/maps'
import Main from '../main/index'
import './styles.css';

export default class home extends Component {
  render() {
    return (
      <div className="home">
      <div className="map">
        <Maps/>
      </div>
      <div className="liste">
        <Main/>
      </div>
      </div>
    );
  }
}
