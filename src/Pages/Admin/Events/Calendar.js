import React, { Component } from 'react'
import axios from "axios";
import {Container, Button} from "reactstrap";

export default class Calendar extends Component {

    constructor(props) {
        super(props)
        this.state = {EventList: []}
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/findAllEvents")
        .then(res => {
            this.setState({
                EventList: res.data
            });
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
                <Button outline color="info" onClick={this.reset} block>Reset</Button>
                </div>
            </Container>        
            </React.Fragment>
        )  
    }
}
