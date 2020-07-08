import React, { Component } from 'react'
import axios from "axios";
import {Row, CardDeck, Col, Container,Card, CardHeader, CardBody } from "reactstrap";
import AdminNav from "../../../Components/AdminNav.component";
import Calendar from "./Calendar";

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
                <Row>
                    <Calendar/>
                </Row>
                <Row> 
                    <div style={{ marginTop: "20px" }}>
                        <CardDeck>
                        {this.state.EventList.map(function(event, index) {
                            return (
                                <React.Fragment key={index}>
                                    <Col xs="12" sm="6">
                                    <Card style={{ marginTop: "20px", marginBottom: "10px" }} body outline color="info">
                                        <CardHeader color="info">
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
                                    </Col>
                                </React.Fragment>
                            );
                        })}    
                        </CardDeck>          
                    </div>  
                </Row> 
            </Container>        
            </React.Fragment>
        )  
    }
}
