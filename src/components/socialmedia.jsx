import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';


export default class SocialMedia extends React.Component {
  render() {
    return (
      <div className='pannel socialmedia'>
        <div className='inner'>
          <h1>You can Also Find Me Here</h1>
          <div className="facebook">
            <a href="https://www.facebook.com/matTheFletcher"> 
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="instergram">
          <a href="https://www.instagram.com/mat_the_fletcher/"> 
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}