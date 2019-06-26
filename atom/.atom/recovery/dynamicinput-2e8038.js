import React, { Component } from 'react';

export default class DynamicInput extends Component {
    render() {
        <div className="dynamic-input">
            <div className="dynamic-input-value">
            </div>
            <input className="dynamic-input-input" />
            <div className="dynamic-input-modify"></div>
            <div className="dynamic-input-validate"></div>
            <div className="dynamic-input-cancel"></div>
        </div>
    }
};
