import React, {Component} from 'react';

class Step extends Component {
    

    updateStep() {
        let newStep = Number.this._inputStep.value;    
        this.props.updateStep(newStep);
    }
    

    render() {
        return(
            <div className="step-componenet">
                <input type="number" ref={(data) => {this._inputStep = data}} placeholder="Ustaw skok" onChange={this.props.updateStep}/>
            </div>
        )
    }
    
}
export default Step;