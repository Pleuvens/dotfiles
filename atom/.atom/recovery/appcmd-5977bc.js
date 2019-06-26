import React, { Component } from 'react';

import './appcmd.css'

export default class AppCMD extends Component {

    showPopup = (event) => {
        event.preventDefault();
        let parent = event.target.parentNode;
        while (!parent.classList.contains('appcmd'))
            parent = parent.parentNode;
        parent.children.item(1).classList.remove('hidden');
    }

    hidePopup = (event) => {
        event.target.parentNode.children.item(1).classList.add('hidden');
    }

    componentDidMount() {
        const container = document.querySelector('.appcmd-popup');
        document.addEventListener('click', (event) => {
            if (!container.is(event.target) && container.has(event.target).length === 0)
        });
    }

    render() {
        return (
            <div className="appcmd">
                <div className="appcmd-card" onClick={this.showPopup}>
                    <div className="appcmd-card-logo">Logo</div>
                    <div className="appcmd-card-name">An Appplication</div>
                </div>
                <div className="appcmd-popup hidden">
                    <div className="appcmd-popup-header">
                        An application header
                    </div>
                    <div className="appcmd-popup-body">
                        An Application body
                    </div>
                </div>
            </div>
        )
    }
}
