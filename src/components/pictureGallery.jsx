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
    var y = []
    while (y.length <= 8){
      var rand = Math.floor(
        Math.random() * x.length
      )

      y.push(x[rand])
    }
    this.setState({'imgs': y})
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
                <h3>Welcome</h3>
                <p>
                  Hi, My Name is Matt, and i am a fletcher; some people call me to `mat the fletcher`. I am an Apprentice learning the noble art of fletching. i am getting better every day, and i have a long way to go. You can find me and contact me at any of the links above.
                </p>
                <h3>Makeing an Order</h3>
                <p>
                  When ordering, you must get the best possible quality and service; this is why i dont have arrows in the shop, every set of Arrows i make is customised for the customer that uses them.
                </p>
                <p>
                  Building a specification means that i need to ask about your measurements, the equipment you use and the technique you use; from this, i can produce the arrows that will fit your needs.
                </p>
                <p>
                  Every arrow comes with a three-year repair policy, which means that i will repair the arrows. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
