import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export default class PicGallery extends React.Component {
  constructor(){
    super();
    this.state = {
      'imgs': []
    }

  }

  componentDidMount(){
    var x = [
      'pics/DSC_0037.JPG',
      'pics/DSC_0038.JPG',
      'pics/DSC_0039.JPG',
      'pics/DSC_0040.JPG',
      'pics/DSC_0041.JPG',
      'pics/DSC_0042.JPG',
      'pics/DSC_0043.JPG',
      'pics/DSC_0044.JPG',
      'pics/DSC_0045.JPG',
      'pics/DSC_0046.JPG',
      'pics/DSC_0047.JPG',
      'pics/DSC_0048.JPG',
      'pics/DSC_0049.JPG',
      'pics/DSC_0050.JPG',
      'pics/DSC_0051.JPG',
      'pics/DSC_0052.JPG',
      'pics/DSC_0053.JPG',
      'pics/DSC_0054.JPG',
      'pics/DSC_0055.JPG',
      'pics/DSC_0056.JPG',
      'pics/DSC_0057.JPG',
      'pics/DSC_0058.JPG',
      'pics/DSC_0059.JPG',
      'pics/DSC_0060.JPG',
      'pics/DSC_0061.JPG',
      'pics/DSC_0062.JPG',
      'pics/DSC_0063.JPG',
      'pics/DSC_0064.JPG',
      'pics/DSC_0065.JPG',
      'pics/DSC_0066.JPG',
      'pics/DSC_0067.JPG',
      'pics/DSC_0068.JPG',
      'pics/DSC_0069.JPG',
      'pics/DSC_0070.JPG',
      'pics/DSC_0071.JPG',
      'pics/DSC_0072.JPG',
      'pics/DSC_0073.JPG',
      'pics/DSC_0074.JPG',
      'pics/DSC_0075.JPG',
      'pics/DSC_0076.JPG',
      'pics/DSC_0077.JPG',
      'pics/DSC_0078.JPG',
      'pics/DSC_0079.JPG',
      'pics/DSC_0080.JPG',
      'pics/DSC_0081.JPG',
      'pics/DSC_0082.JPG',
      'pics/DSC_0083.JPG',
      'pics/DSC_0084.JPG',
      'pics/DSC_0085.JPG',
    ]
    this.setState({'imgs': x})
  }

  render() {
    var imgsSlides = []
    for(var i = 0; i<=this.state.imgs.length; i++){

      if(this.state.imgs[i] === undefined){
        continue;
      }

      imgsSlides.push(
        <div key={i} data-src={this.state.imgs[i]} />
      )
    }
    

    return (
      <div className="pannel pictGallery" >
        <div className="inner">
          <h1>Here is Some of my work.</h1>
          
          <div className='row'>
            <div className="left">
              <AwesomeSlider animation="cubeAnimation" >
                {imgsSlides}
              </AwesomeSlider>
            </div>
            <div className='right'>
              <div className='inner'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tellus elementum sagittis vitae. Nec nam aliquam sem et tortor consequat id porta. Sit amet massa vitae tortor condimentum lacinia quis. Gravida in fermentum et sollicitudin ac. Ipsum dolor sit amet consectetur adipiscing elit ut. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Fermentum iaculis eu non diam phasellus vestibulum. Nunc scelerisque viverra mauris in. Duis convallis convallis tellus id. Cursus eget nunc scelerisque viverra mauris. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Purus ut faucibus pulvinar elementum integer.</p>
                <p>Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Ut lectus arcu bibendum at. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Turpis in eu mi bibendum neque egestas. Massa tincidunt dui ut ornare lectus sit amet. Pharetra et ultrices neque ornare aenean euismod elementum. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Dictumst quisque sagittis purus sit amet volutpat consequat. Et netus et malesuada fames ac.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
