import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

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

        var stepOne = this.state.l / 2;
        var stepTwo = this.state.b;
        var stepThree = stepOne - stepTwo;
        var stepFour = stepThree * 100;
        var stepFive = stepFour / stepOne;

        if(isNaN(stepFive)){
            stepFive = 0;
        }

        return(
            <div className="pannel" >
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
                                <label htmlFor="l">Length of Arrow</label>
                                <input type="number" name="l" value={this.state.l} onChange={this.updateValueFoc} />mm
                            </div>
                            <div className="row">
                                <label htmlFor="b">Balance Point</label>
                                <input type="number" name="b" value={this.state.b} onChange={this.updateValueFoc} />mm
                            </div>
                            <div>
                                {Math.round(stepFive)}%
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
            <div className="KinetticEnergy pannel" >
                <div className="inner" >
                    <div className="header">
                        <h1></h1>
                    </div>
                    <div className="row">
                        <label htmlFor="weight">Arrow Weight (grains)</label>
                        <input type="number" name='weight' value={this.state.weight} onChange={this.onChangeEvent} />
                    </div>
                    <div className="row">
                        <label htmlFor="speed">Arrow speed (FPS)</label>
                        <input type="number" name='speed' value={this.state.speed} onChange={this.onChangeEvent} />
                    </div>
                    <div className="row">
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
            <div>
                <Foc />
                <KineticEnergy />
            </div>
        );
    }
}