import React, {Component} from 'react';
import ButtonsPanel from './ButtonsPanel';
import Title from './Title';
import './Counter.css';
import Step from "./Step"

// Tylko komponenty klasowe posiadają stan this.state

export default class Counter extends Component {
    constructor(props) {
        super(props);
        /// stan komponentu inicjujemy w kostruktorach
        let iValue = 0;
        let iStep = 1;
        this.state = {
            value: iValue,
            step: iStep
        }
    }

    changeValue = () => {
        this.setState((prevState) => {
            console.log('Wywołuję na click w ButtonsPanel metodę utworzoną w rodzicu (Counter)');
            return {
                value: parseInt(prevState.value) + parseInt(this.state.step)
            }
        })
    }
    resetCounter = () => {
        
        this.setState(() => {
            return {
                value: 0
            }
        })
    }

    stepReset = () => {
        this.setState(() => {

            return {
                step: 1
            }
        })
        
    }
    changeStep = (newStep) => {
        console.log(newStep);
        
        this.setState(() => {
            return {
                step: newStep
            }
        })    
    }

    render() {
        return (
            <div className="counter-component">
                <Title valueCounter={this.state.value} />
                <ButtonsPanel actionCallback={this.changeValue} resetCallback={this.resetCounter} initStep={this.stepReset}/>
                <Step step={this.state.step} updateStep={this.changeStep} />
            </div>
        )
    }
}