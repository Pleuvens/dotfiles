import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './information.css'

export default class TransactionCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    toggleCategory = () => {
        this.setState({ show: !this.state.show });
    }

    displayCategory = () => {
        let content = [];

        return content;
    }

    render() {
        <div className="dashboard-information-category-name" onClick={this.toggleCategory}>
            <Fade collapse when={this.state.show}>
                {this.displayCategory()}
            </Fade>
        </div>
    }
};
