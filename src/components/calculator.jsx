import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import "./calculator.css";

class Foc extends React.Component {
    constructor(){
        super();
        this.state = {
            "l": 0,
            "b": 0
        }

        this.updateValueFoc = this.updateValueFoc.bind(this);
    }

    updateValueFoc(event){
        var s = this.state;
        var value = parseInt(event.target.value, 10);

        s[event.target.name] = value;
        this.setState(s);
    }

    render(){


        var foc = ( (this.state.l / 2) - this.state.b) * 100 / (this.state.l / 2)

        if(isNaN(foc)){
            foc = 0;
        }

        return(
            <div className="pannel foc" >
                <div className="header">
                    <div className="inner">
                        <h2>Calculators</h2>
                    </div>
                </div>
                <div className="foc" >
                    <div className="inner">
                        <div className="header"><h3>Front of Center</h3></div>
                        <div className="inner">
                            <div className="row" >
                                <label htmlFor="l"> <div> Length of Arrow </div> </label>
                                <input type="number" name="l" value={this.state.l} onChange={this.updateValueFoc} />mm
                            </div>
                            <div className="row">
                                <label htmlFor="b"> <div>Balance Point</div> </label>
                                <input type="number" name="b" value={this.state.b} onChange={this.updateValueFoc} />mm
                            </div>
                            <div className='results'>
                                <div>
                                    <h3>Front of center</h3>
                                    {Math.round(foc)}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class KineticEnergy extends React.Component {
    constructor(){
        super();
        this.state = {
            "weight": 0,
            "speed": 0
        }

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(event){
        var s = this.state;
        s[event.target.name] = event.target.value;
        this.setState(s);
    }

    render(){

        var ke = (this.state.weight * (this.state.speed * this.state.speed) / 450800);
        var mom = (this.state.weight * this.state.speed) / 225400;


        return(
            <div className="kinetticEnergy pannel" >
                <div className="inner" >
                    <div className="header">
                        <h1>Kenetic Energy</h1>
                    </div>
                    <div className="row">
                        <label htmlFor="weight"><div> Arrow Weight (grains) </div></label>
                        <input type="number" name='weight' value={this.state.weight} onChange={this.onChangeEvent} />
                    </div>
                    <div className="row">
                        <label htmlFor="speed"><div>Arrow speed (FPS)   </div></label>
                        <input type="number" name='speed' value={this.state.speed} onChange={this.onChangeEvent} />
                    </div>
                    <div className="row results">
                        <div className="ke">
                            <h3>Kenetic Energy</h3>
                            <h4>{ke}</h4>
                        </div>
                        <div className="MOM">
                            <h3>Momentum</h3>
                            <h4>{mom}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default class Calculator extends React.Component {
    render(){
        return(
            <div className="calculator">
                <Foc />
                <KineticEnergy />
            </div>
        );
    }
}