import React, { Component } from 'react'
import axios from "axios";
import {Container} from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

var events; 

export default class Calendar extends Component {

    

    constructor(props) {
        super(props)
        this.state = {EventList: []}
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/findAllEvents")
        .then(res => {
            events = res.data.map(event => ({ title: event.name, date: event.date }));
        }) 
    }

    reset = e => {
        console.log(this.state.EventList);
        var result = this.state.EventList.map(event => ({ title: event.name, date: event.date }));
        console.log(result);
    };

    render() {  
        
        return (
            
            <React.Fragment>      
            <Container>
                <div style={{ marginTop: "20px" }}>
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    weekends={false}
                    events={events}
                />
                </div>
            </Container>        
            </React.Fragment>
        )  
    }
}
