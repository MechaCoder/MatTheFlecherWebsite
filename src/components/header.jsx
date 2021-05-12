import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import logo from '../logo.svg';

export default class SiteHeader extends React.Component {
  componentDidMount(){
    document.title = 'Mat The Fletcher';
  }
  render() {
    return (
      <header>
        <div className='inner'>
          <a href='/'><img src={logo} alt='logo' /></a>
          <div className="title">
            <h1>Mat the Fletcher</h1>
            <p>Arrows Never fly straight, They fly True <a href='?AinSakhri' >.</a> </p>
          </div>
        </div>
      </header>);
  }
}
