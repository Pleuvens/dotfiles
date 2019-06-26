import React, { Component } from 'react';

class Transaction extends Component {

    render() {
        return (
            <div className="transaction">
                <div className="transaction-header">
                    <div className="transaction-header-date">03/06/2019 14:56</div>
                    <div className="transaction-header-id">id_de_la_transaction</div>
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
