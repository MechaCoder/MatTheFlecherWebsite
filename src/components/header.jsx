import React from 'react';
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
          <img src={logo} alt='logo' />
          <div className="title">
            <h1>Mat the Fletcher</h1>
            <p>Arrows Never fly straight, They fly True </p>
          </div>
        </div>
      </header>);
  }
}
