import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../redux/Actions/';

import './dashboard.css';

class DashboardHeader extends Component {

    logout = (event) => {
        this.props.dispatch(userActions.logout());
    }

    render() {
        return (
            <div className="dashboard-header">
                <div className="dashboard-header-logout" onClick={this.logout}>
                    Logout
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const user = state.authentication.user;
    return {
        user
    };
}

const connectedDashboardHeader = connect(mapStateToProps)(DashboardHeader);

export { connectedDashboardHeader as DashboardHeader }
