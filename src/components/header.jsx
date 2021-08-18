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
              <p>Arrows Never fly straight, They fly True<a href='?AinSakhri' rel='nofollow' >.</a> </p>
            </div>
            <div className='nav'>
              <nav>
                  <a href='/?pics'> <div className='el' > Profile </div> </a>
                  <a href='/?calc'> <div className='el' > Calculators </div> </a>
              </nav>
            </div>
          </div>
        </header>
      );
  }
}
