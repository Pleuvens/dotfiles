import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './dynamicinput.css';

export default class DynamicInput extends Component {

    constructor(props) {
        super(props);
        this.parent = React.createRef();
    }

    showInput = (input, div, buttons) => {
        input.classList.remove('hidden');
        buttons[1].classList.remove('hidden');
        buttons[2].classList.remove('hidden');

        div.classList.add('hidden');
        buttons[0].classList.add('hidden');
    }

    hideInput = (input, div, buttons) => {
        input.value = '';
        input.classList.add('hidden');
        buttons[1].classList.add('hidden');
        buttons[2].classList.add('hidden');

        div.classList.remove('hidden');
        buttons[0].classList.remove('hidden');
    }

    modify = (event) => {
        const node = event.target.parentNode;
        let buttons = [
            node.children.item(2),
            node.children.item(3),
            node.children.item(4)
        ];
        this.showInput(node.children.item(1), node.children.item(0), buttons);
    }

    cancel = (event) => {
        const node = event.target.parentNode;
        let buttons = [
            node.children.item(2),
            node.children.item(3),
            node.children.item(4)
        ];
        this.hideInput(node.children.item(1), node.children.item(0), buttons);
    }

    validate = (event) => {
        const node = event.target.parentNode;
        let buttons = [
            node.children.item(2),
            node.children.item(3),
            node.children.item(4)
        ];
        node.children.item(0).innerHTML = node.children.item(1).value;
        // do something
        this.hideInput(node.children.item(1), node.children.item(0), buttons);
    }

    componentDidMount() {
        const item = this.props.item;
        if (!item.value) {
            this.parent.current.children.item(0).classList.add('hidden');
            this.parent.current.children.item(2).classList.add('hidden');
        } else {
            this.parent.current.children.item(1).classList.add('hidden');
            this.parent.current.children.item(3).classList.add('hidden');
            this.parent.current.children.item(4).classList.add('hidden');
        }
    }

    render() {
        return (<div className="dynamic-input" ref={this.parent}>
            <div className="dynamic-input-value">{this.props.item.value}
            </div>
            <input className="dynamic-input-input" />
            <div className="dynamic-input-modify" onClick={this.modify}>M</div>
            <div className="dynamic-input-validate" onClick={this.validate}>V</div>
            <div className="dynamic-input-cancel" onClick={this.cancel}>C</div>
        </div>)
    }
};
