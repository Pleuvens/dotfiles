import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../redux/Actions/';

import { DashboardHeader } from './header';
import { DashboardInformation } from './dashboardinformation';
import { DashboardTransactions } from './dashboardtransactions';
import { DashboardAppCMD } from './dashboardappcmd';

const views = {
    INFORMATION: 0,
    TRANSACTIONS: 1,
    APPCMD: 2,
    
}

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentView: views.INFORMATION,
            headerTitle: "Mes informations"
        }
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    getTitle = (view) => {
        switch (view) {
            case views.INFORMATION:
                return "Mes informations";
            case views.TRANSACTIONS:
                return "Mes transactions";
            case views.APPCMD:
                return "Applications qui consomment mes données";
            default:
                return "Mes informations";
        }
    }

    selectView = (event) => {
        this.setState({ currentView: parseInt(event.target.getAttribute('data-view')), headerTitle: this.getTitle(parseInt(event.target.getAttribute('data-view')))});
    }

    displaySelectedView = () => {
        switch (this.state.currentView) {
            case views.INFORMATION:
                return <DashboardInformation />
            case views.TRANSACTIONS:
                return <DashboardTransactions />
            case views.APPCMD:
                return <DashboardAppCMD />
            default:
                return <DashboardInformation />
        }
    }

    render () {
        const { user, users } = this.props;
        return (
            <div className="dashboard">
                <div className="dashboard-menu">
                    <div className="dashboard-menu-title">
                        Company
                    </div>
                    <div className="dashboard-menu-item" onClick={this.selectView} data-view={views.INFORMATION}>informations</div>
                    <div className="dashboard-menu-item" onClick={this.selectView} data-view={views.TRANSACTIONS}>transactions</div>
                    <div className="dashboard-menu-item" onClick={this.selectView} data-view={views.APPCMD}>appcmd</div>
                </div>
                <div className="dashboard-body">
                    <DashboardHeader title={this.state.headerTitle}/>
                    <div className="dashboard-view">
                        {this.displaySelectedView()}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const user = state.authentication.user;
    const users = state.users;
    return {
        user,
        users
    };
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard }
