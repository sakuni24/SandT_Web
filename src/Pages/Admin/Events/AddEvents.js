import React, { Component } from "react";
import axios from 'axios';
import {Spinner, Col, Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import {Row} from 'react-bootstrap';
import AdminNav from "../../../Components/AdminNav.component";
import Logo from "../../../Images/logo.jpg";
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            loading: false,
            alert: false,
            alertMsg: "",
            name: "",
            date: "",
            venue: "",
            description: "",
            headCount: "",
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
            alertMsg: "",
            name: "",
            date: "",
            venue: "",
            description: "",
            headCount: "",

        });
        document.getElementById("form").reset();
    };

    validate = () => {
        let error = false;
        let alertMsg = "";
        if (this.state.name.length < 1) {
            error = true;
            alertMsg = "Name can't be empty";
        }
        if (this.state.venue.length < 1) {
            error = true;
            alertMsg = "Vanue can't be empty";
        }
        if (this.state.description.length < 1) {
            error = true;
            alertMsg = "Description can't be empty";
        }
        if (this.state.headCount.length < 1) {
            error = true;
            alertMsg = "Count can't be empty";
        }
        
    
        this.setState({alertMsg: alertMsg});
        return error;  
    }

    onSubmit(e) {
        e.preventDefault();
        const error = this.validate();
        this.setState({ 
            loading: true,
            alert: false
        });
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
                    this.setState({ alert: false });
                    this.reset();
                    window.location.reload(false);
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({
                        alertMsg: "Server is under maintanace, please try again later!",
                        alert: true,
                        loading: false
                    });
                });
            //        
        }
        else{
            this.setState({ 
                alert: true,
                loading: false 
            });
        }     
    }
    
    render(){
        return (
            <React.Fragment>
                <AdminNav/>
                    <center>
                    <Col xs="6">  
                    <br/><br/><br/><br/>
                        <center>
                            <img src={Logo} alt="S & T Group" style={{justifyContent: 'center',alignItems: 'center',}}/>
                            
                                <h4>S & T Group</h4>
                                Add a new event
                           
                        </center>
                    </Col>

                    <Col xs="5">
                        <br/>
                        <Col>
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
                                { this.state.loading ?
                                    <Spinner animation="border" className="spinner2" alignItems="center"/>
                                : null}
                                { this.state.alert ?
                                    <Alert color="danger" status={this.state.alert}>
                                        {this.state.alertMsg}
                                    </Alert>
                                : null}
                                <Button color="info" onClick={this.reset}>Reset</Button>
                                <Button color="info" type="submit">Add</Button>    
                            </Form>
                        </Col>
                    </Col>
                    </center>
            </React.Fragment>
          );
        }  
}

