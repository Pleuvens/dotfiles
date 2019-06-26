import React, { Component } from 'react';
import Slide from 'react-reveal/Fade';
import './transaction.css';

export default class Transaction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    toggleBody = (event) => {
        event.preventDefault();

        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div className="transaction">
                <div className="transaction-header" onClick={this.toggleBody}>
                    <div className="transaction-header-date">03/06/2019 14:56</div>
                    <div className="transaction-header-id">e00848bc-71c3-422f-b637-cbfc9d2e2042</div>
                </div>
                <Slide when={this.state.show}>
                <div className="transaction-body">
                    <div className="transaction-body-item">info1: value</div>
                    <div className="transaction-body-item">info2: value</div>
                    <div className="transaction-body-item">info3: value</div>
                    <div className="transaction-body-item">info4: value</div>
                </div>
                </Slide>
            </div>
        )
    }
};
