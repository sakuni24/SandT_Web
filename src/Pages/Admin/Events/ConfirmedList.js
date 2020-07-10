import React, { Component } from "react";
import axios from 'axios';
import { Modal, ModalBody, ModalHeader, Container, Spinner, Row, Col, Button, Card, CardBody, CardDeck, CardHeader } from 'reactstrap';
import AdminNav from "../../../Components/AdminNav.component";

export default class ConfirmedList extends Component {
   
    
    constructor(props) {
        super(props);
    
        this.state = {
            RequestList: [],
            loading: true,
        };
    }

    componentDidMount = async () => {
        await axios.get("http://localhost:8080/getConfirmedEventRequestsByEventId/"+this.props.match.params.id)
        .then(res => {
            this.setState({ 
                RequestList: res.data,
                loading: false
            })
        }) 
    }
      
    render(){
        if (this.state.loading){
            return(
                <React.Fragment>
                    <AdminNav/>
                    <div className="middle">
                        <Spinner color="info" style={{ width: '100', height: '100' }}/>
                    </div>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                { this.state.modal ?
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Are you sure?</ModalHeader>
                        <ModalBody>
                        <div className="container">
                            <Button outline color="info" onClick={this.delete} block>Yes</Button>
                        </div>
                        </ModalBody>
                    </Modal>
                : null }
                <AdminNav/>
                <Container>
                    <Row xs="12" sm="12"> 
                        <div style={{ marginTop: "20px" }}>
                            <CardDeck>
                            {this.state.RequestList.map(function(request, index) {
                                return (
                                    <React.Fragment key={index}>
                                        <Col xs="12" sm="6">
                                        <Card style={{ marginTop: "20px", marginBottom: "10px" }} body outline color="info">
                                            <CardHeader color="info">
                                                <h6>{request.name}</h6>
                                            </CardHeader>
                                            <CardBody>
                                                Number : {request.number}<br/>
                                                Email : {request.email}<br/>
                                                Heads : {request.heads}<br/>
                                                {/* <Link to={"/admin/editevent/"+event.id}>Edit or Delete</Link> */}
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
        );
    }  
}