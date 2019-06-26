import React, { Component } from 'react';

import { connect } from 'react-redux';

import { userActions } from '../redux/Actions/';

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

    render() {
        return (
            <div className="dashboard-information">
                <div className="dashboard-information-category">
                    <div>
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
