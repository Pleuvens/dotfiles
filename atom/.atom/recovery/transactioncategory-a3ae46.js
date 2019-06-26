import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade';
import DynamicInput from './dynamicinput';

import './information.css'

export default class TransactionCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            dummy: false
        };
    }

    toggleDummy = () => {
        console.log(this.props.category.name);
        this.setState({ dummy: !this.state.dummy }, () => {
            if (typeof this.props.toggleDummy === 'function')
                this.props.toggleDummy();
        });
    }

    toggleCategory = () => {
        this.setState({ show: !this.state.show }, () => {
            this.toggleDummy();
        });
    }

    displayCategory = () => {
        let display = [];
        let content = this.props.category.content;
        for (let i = 0; i < content.length; i++)
        {
            if (content[i].content !== undefined)
            {
                display.push(
                    <Fade collapse when={this.state.show}><TransactionCategory category={content[i]} toggleDummy={this.toggleDummy}/></Fade>);
            } else {
                display.push(
                    <Fade collapse when={this.state.show}><DynamicInput item={content[i]} /></Fade>);
            }
        }
        return display;
    }

    componentDidMount() {
        this.toggleDummy();
    }

    render() {
        return (
        <div className="dashboard-information-category" data-dummy={this.state.dummy}>
            <div className="dashboard-information-category-name" onClick={this.toggleCategory}>
                {this.props.category.name}
            </div>

                {this.displayCategory()}
        </div>)
    }
};
