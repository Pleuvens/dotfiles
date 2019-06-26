import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Zoom from 'react-reveal/Zoom';

import './appcmd.css'

export default class AppCMD extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.popup = React.createRef();
        this.handlePopup = this.handlePopup.bind(this);
    }

    handlePopup = (event) => {
        let root = ReactDom.findDOMNode(this);
        let popup = root.querySelector('.appcmd-popup');
        console.log(popup);
        console.log(event.target.oarentNode);
        if (event.target !== popup && event.target.compareDocumentPosition(popup) !== 16) {
            this.hidePopup();
        }
    }

    showPopup = (event) => {
        this.setState({ show: true }, () => {
           document.addEventListener('click', this.handlePopup);
        });
    }

    hidePopup = () => {
        this.setState({ show: false}, () => {
            document.removeEventListener('click', this.handlePopup);
        });
    }


    render() {
        return (
            <div className="appcmd">
                <div className="appcmd-card" onClick={this.showPopup}>
                    <div className="appcmd-card-logo">Logo</div>
                    <div className="appcmd-card-name">An Appplication</div>
                </div>
                <Zoom when={this.state.show}>
                    <div className="appcmd-popup" ref={this.popup}>
                        <div className="appcmd-popup-header">
                            An application header
                        </div>
                        <div className="appcmd-popup-body">
                            An Application body
                        </div>
                    </div>
                </Zoom>
            </div>
        )
    }
}
