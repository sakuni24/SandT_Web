import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddEvents from "./Events/AddEvents";
import EditEvent from "./Events/EditEvent";
import EventList from "./Events/EventList";
import Calendar from "./Events/Calendar";

export default class AdminRoutes extends Component {

    render() {
        return (
            <Router>
                <Route path="/admin/dashboard" component={Dashboard}/>
                <Route path="/admin/addevents" component={AddEvents}/>
                <Route path="/admin/eventlist" component={EventList}/>
                <Route path="/admin/editevent" component={EditEvent}/>
                <Route path="/admin/eventcalendar" component={Calendar}/>
            </Router>
        );
    }
}