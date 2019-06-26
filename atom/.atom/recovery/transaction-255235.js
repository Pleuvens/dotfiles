import React, { Component } from 'react';
import './transaction.css';

export default class Transaction extends Component {

    toggleBody = (event) => {
        event.preventDefault();

        let body = event.target.parentNode.children.item(1);
        if (body.classList.includes('hidden'))
            body.classList.remove('hidden');
        else
            body.classList.add('hidden');
    }

    hideBody = (event) => {
        event.preventDefault();
        event.target.parentNode.children.item(1).add('hidden');
    }

    render() {
        return (
            <div className="transaction" onBlur={this.hideBody}>
                <div className="transaction-header" onClick={this.toggleBody}>
                    <div className="transaction-header-date">03/06/2019 14:56</div>
                    <div className="transaction-header-id">e00848bc-71c3-422f-b637-cbfc9d2e2042</div>
                </div>
                <div className="transaction-body hidden">
                    <div className="transaction-body-item">info1: value</div>
                    <div className="transaction-body-item">info2: value</div>
                    <div className="transaction-body-item">info3: value</div>
                    <div className="transaction-body-item">info4: value</div>
                </div>
            </div>
        )
    }
};
