import React, { Component } from 'react'
import axios from "axios";
import {Container,Card, CardHeader, CardBody } from "reactstrap";
import AdminNav from "../../../Components/AdminNav.component";

export default class EditEvents extends Component {

    constructor(props) {
        super(props)
        this.state = {EventList: []}
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/findAllEvents")
        .then(res => {
            this.setState({ EventList: res.data })
        }) 
    }

    render() {   
        return (
            
            <React.Fragment> 
            <AdminNav/>      
            <Container>
                <div style={{ marginTop: "20px" }}>
                    <div>
                    {this.state.EventList.map(function(event, index) {
                        return (
                            <React.Fragment key={index}>
                                <Card style={{ marginTop: "20px", marginBottom: "10px" }} color="light">
                                    <CardHeader>
                                        <h6>{event.name}</h6>
                                    </CardHeader>
                                    <CardBody>
                                        Date : {event.date}<br/>
                                        Venue : {event.venue}
                                    </CardBody>
                                
                                    <h6 style={{ color: "#6d6d6d", paddingLeft: "13px", fontSize: "2" }}><small>
                                    </small>
                                    </h6>                      
                                </Card>
                            </React.Fragment>
                        );
                    })}              
                    </div>
                </div>
            </Container>        
            </React.Fragment>
        )  
    }
}
