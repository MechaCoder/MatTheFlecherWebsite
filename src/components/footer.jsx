import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import './footer.css';

import outreachCumbria from '../outreachCumbria.png';

function selectFeedback(){

    var els = [
        '"this guy knows what he is doing" - North East Bowman',
        '"hit the target every time" - North East Bowman',
        '"He has a deep range of experience and knowledge" - Scotish client',
    ]

    return els[Math.floor(Math.random() * els.length )]
}

export default class SiteFooter extends React.Component {

    constructor(){
        super();
        this.state = {
            'feedback': selectFeedback()
        };
    }

    componentDidMount(){
        const interval = setInterval(()=>{
            this.setState({'feedback': selectFeedback() })
        }, 10000)
    }

    render(){
        return(
            <footer className='siteFooter'>
                <div className="left">
                    <div className="inner" >
                        <a href="http://www.outreachcumbria.org.uk/">
                            <img src={outreachCumbria} alt='outreach cumbria 2021 - 2022' />
                        </a>
                    </div>
                </div>
                <div className="center">
                    <div className="inner">
                        <div className="feedback">
                            {this.state.feedback}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="inner">
                    <a href="https://themakers.directory">
                            <img
                                src='https://themakers.directory/wp-content/uploads/2016/08/logopng.png'
                                alt='membership of the HCA'
                            />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
};