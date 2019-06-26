import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade';
import DynamicInput from './dynamicinput';

import './information.css'

export default class TransactionCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }

    toggleCategory = () => {
        this.setState({ show: !this.state.show });
    }

    displayCategory = () => {
        let display = [];
        let content = this.props.category.content;
        for (let i = 0; i < content.length; i++)
        {
            if (content[i].content !== undefined)
            {
                display.push(
                    <Fade collapse when={this.state.show}><TransactionCategory category={content[i]}/></Fade>);
            } else {
                display.push(
                    <Fade collapse when={this.state.show}><DynamicInput item={content[i]} /></Fade>);
            }
        }
        return display;
    }
    
    render() {
        return (
        <div className="dashboard-information-category">
            <div className="dashboard-information-category-name" onClick={this.toggleCategory}>
                {this.props.category.name}
            </div>

                {this.displayCategory()}
        </div>)
    }
};
