import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

export default class AdminRoutes extends Component {
    render() {
        return (
            <Router>
                <Route path="/admin/dashboard" component={Dashboard}/>
            </Router>
        );
    }
}