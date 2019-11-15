import React, {Component} from 'react';
import './Title.css';

export default class Title extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <h3>Stan licznika: {this.props.valueCounter}</h3>
        );
            
    }
}