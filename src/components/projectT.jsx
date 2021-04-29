import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import data from '../data/contacts.json';
import './projectT.css'

class Contact extends React.Component {
    render(){
        return(
            <div className="contact">
                <div className="inner">
                    <div><h5>{this.props.data.title}</h5></div>
                    <div> <a href={"tel:"   + this.props.data.number} >{this.props.data.number}</a></div>
                    <div> <a href={"mato:" + this.props.data.email} >{this.props.data.email}</a></div>
                </div>
            </div>
        )
    }
}

export default class ProjectT extends React.Component {

    constructor(){
        super();
        this.state = {}
    }
    render(){
        var contacts = []
        for(var i = 0; i<=data.projectt.length; i++){
            if(data.projectt[i] === undefined){
                continue;
            }

            contacts.push(<Contact 
                data={data.projectt[i]}
            />)
        }

        return (
            <div className="projectT" >
                <div className="inner">
                    <div className='pannel vaild'>
                        <div className='inner'>
                            <h1>You Are valid !,</h1>
                            <h1>You are not Alone</h1>
                            <hr />
                        </div>
                    </div>
                    <div className='pannel welcome'>
                        <div className='inner '>
                        <h2>Ain Sakhri</h2>
                        <p>
                            the <a href="https://en.wikipedia.org/wiki/Ain_Sakhri_Lovers"> Ain Sakhri lovers </a> is a sculpture is was found in cave near Bethlehem, and is around 11,000 years old, it is the oldest know figure of two people holding each other.
                        </p>
                        <div className="inner">
                            <p>
                                When i was Volteering, i met few children. At the beginning of their transition, one of the children did not have a supportive environment at home, and when they were outed, there were no longer allowed to contact us. I couldn't help them then, but i can do this.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className='pannel help'>
                        <div className='inner'>
                            <h2>Do you Need Help?</h2>
                            <div>
                                If you dont have acesses to a phone O2 have the Alcatel 20.38X phone for £5.00 and a £5.00 sim only bundle. 
                                you can check out useing paypal and they offer a click and collect service.
                            </div>
                            <hr />
                            <div className="row">
                                {contacts}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}