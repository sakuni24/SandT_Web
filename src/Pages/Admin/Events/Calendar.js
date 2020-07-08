import React, { Component } from 'react'
import axios from "axios";
import {Container} from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

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

    handleEventClick = (info) => { // bind with an arrow function
        alert(info.event.title)
    }

    render() {      
        return (   
            <React.Fragment>      
            <Container>
                <div style={{ marginTop: "20px" }}>
                <FullCalendar
                    plugins={[ dayGridPlugin ,interactionPlugin ]}
                    eventClick={this.handleEventClick}
                    initialView="dayGridMonth"
                    weekends={true}
                    events={events}
                />
                </div>
            </Container>        
            </React.Fragment>
        )  
    }  
}


