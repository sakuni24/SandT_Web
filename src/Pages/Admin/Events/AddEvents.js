import React, { Component } from "react";
import axios from 'axios';
import {Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AdminNav from "../../../Components/AdminNav.component";

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            name: "",
            date: "",
            venue: "",
            description: "",
            headCount: "",
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit(e) {
        e.preventDefault()
    
        const obj = {
            name: this.state.name,
            date: this.state.date,
            venue: this.state.venue,
            description: this.state.description,
            headCount: this.state.headCount
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
    }
    

    render(){
        return (
            <React.Fragment>
                <AdminNav/>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                
                
                    <Form onSubmit={this.onSubmit}>
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
                    
                        <Button color="info" type="submit">Add</Button>
                    </Form>
                
                </Col>
                
                
            </React.Fragment>
          );
        }  
}

