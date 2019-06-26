import React, { Component } from 'react';

import { connect } from 'react-redux';
import { userActions } from '../redux/Actions/';

import DynamicInput from './dynamicinput';

import './information.css';

class DashboardInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            informations: null
        }
    }

    displayAllInformations = () => {
        const informations = this.state.informations;
        if (!informations)
            return;
    }

    toggleCategory = (event) => {
        event.preventDefault();
        const node = event.target.parentNode.children.item(1);

        if (node.classList.contains('hidden'))
            node.classList.remove('hidden');
        else
            node.classList.add('hidden');
    }

    render() {
        let toto = { value: 'Caterpie'};
        return (
            <div className="dashboard-information">
                <div className="dashboard-information-category">
                    <div className="dashboard-information-category-name" onClick={this.toggleCategory}>
                        -  Top
                    </div>
                    <div className="dashboard-information-category">
                        <div className="dashboard-information-category-name" onClick={this.toggleCategory}>
                            -  Contact
                        </div>
                        <DynamicInput item={toto}/>
                        <DynamicInput item={toto}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const user = state.authentication.user;
    return {
        user
    };
}

const connectedDashboardInformation = connect(mapStateToProps)(DashboardInformation);

export { connectedDashboardInformation as DashboardInformation }
