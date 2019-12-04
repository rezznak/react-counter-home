import React, {Component} from 'react';

class Step extends Component {
    

    updateStep = () => {
        // console.log(this._inputStep.value);
       
        this.props.updateStep(this._inputStep.value);
    }
    

    render() {
        return(
            <div className="step-componenet">
                <input type="number" ref={(data) => this._inputStep = data} placeholder="Ustaw skok" onChange={this.updateStep} value={this.props.step} />
            </div>
        )
    }
    
}
export default Step;