import React, { Component } from "react";
import axios from 'axios';
import {Col, Row, Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AdminNav from "../../../Components/AdminNav.component";

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            alert: false,

            name: "",
            date: "",
            venue: "",
            description: "",
            headCount: "",

            nameError: "",
            dateError: "",
            venueError: "",
            descriptionError: "",
            headCountError: "",
        };
    }

    closeAlert = () => {
        this.setState({ alert: false });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    reset = e => {
        this.setState({
            alert: false,

            name: "",
            date: "",
            venue: "",
            description: "",
            headCount: "",

            nameError: "",
            dateError: "",
            venueError: "",
            descriptionError: "",
            headCountError: "",
        });
        document.getElementById("form").reset();
    };

    validate = () => {
        let error = false;
        const errors = {
          nameError: "",
          dateError: "",
          venueError: "",
          descriptionError: "",
          headCountError: ""
        };
    
        if (this.state.name.length < 1) {
          error = true;
          errors.nameError = 'First name required *'
        }
        if (this.state.venue.length < 1) {
            error = true;
            errors.venueError = 'First name required *'
        }
        if (this.state.description.length < 1) {
            error = true;
            errors.descriptionError = 'First name required *'
        }
        if (this.state.headCount.length < 1) {
            error = true;
            errors.headCountError = 'First name required *'
        }
        
    
        this.setState({
          ...this.state,
          ...errors
        })
        return error;  
    }

    onSubmit(e) {
        e.preventDefault();
        const error = this.validate();
    
        if(!error){

            const obj = {
                name: this.state.name,
                date: this.state.date,
                venue: this.state.venue,
                description: this.state.description,
                headCount: this.state.headCount,
                available: this.state.headCount
            };
            console.log(obj);
            axios.post("http://localhost:8080/addEvent", obj)
                .then((res) => {
                    console.log("done");
                    console.log(res.data);
                })
                .catch((error) => {
                console.log(error);
                });
                this.setState({ alert: false });
                this.reset();
        }
        else{
            this.setState({ alert: true });
        }     
    }
    
    render(){
        return (
            <React.Fragment>
                <AdminNav/>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                
                
                    <Form id="form" onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="name">Event Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Astro" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input type="text" name="date" id="date" placeholder="2020-01-01" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="venue">Venue</Label>
                            <Input type="text" name="venue" id="venue" placeholder="Colombo" onChange={this.onChange}/>
                        </FormGroup>           
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="textarea" name="description" id="description" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="headCount">Head Count</Label>
                            <Input type="number" name="headCount" id="headCount" placeholder="25" onChange={this.onChange}/>
                        </FormGroup>
                        { this.state.alert ?
                            <Alert color="danger" status={this.state.alert}>
                                Fields Can't be empty!
                            </Alert>
                        : null}

                        <Row> 
                            <Col sm={{ offset: 1 }}>
                                <Button color="info" onClick={this.reset}>Reset</Button>
                            </Col>
                            <Col sm={{ offset: 1 }}>
                                <Button color="info" type="submit">Add</Button>
                            </Col>
                        </Row>
                    </Form>
                
                </Col>
                
                
            </React.Fragment>
          );
        }  
}

