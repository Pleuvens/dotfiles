import React, { Component } from 'react';

class Transaction extends Component {

    render() {
        return (
            <div className="transaction">
                <div className="transaction-header">
                    <div className="transaction-header-date"></div>
                    <div className="transaction-header-id"></div>
                </div>
                <div className="transaction-body">
                    <div className="transaction-body-item"></div>
                    <div className="transaction-body-item"></div>
                    <div className="transaction-body-item"></div>
                    <div className="transaction-body-item"></div>
                </div>
            </div>
        )
    }
};
