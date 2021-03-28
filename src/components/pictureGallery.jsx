import React from 'react';
import ReactDOM from 'react-dom';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export default class PicGallery extends React.Component {
  render() {
    return (
      <div className="pannel pictGallery" >
          <AwesomeSlider>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </AwesomeSlider> 
      </div>
    );
  }
}
