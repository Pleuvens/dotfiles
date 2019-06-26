import React, { Component } from 'react';
import './transaction.css';

export default class Transaction extends Component {

    render() {
        return (
            <div className="transaction">
                <div className="transaction-header">
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
