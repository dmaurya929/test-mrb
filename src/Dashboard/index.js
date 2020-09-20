import React from 'react' ;
import { Container, Row, Col, Card, ListGroup,ListGroupItem, Form } from 'react-bootstrap' ;
import logo from '../logo.svg' ;
import './index.css'
import Stats from './components/stats' ;
import BookingInfo from './components/BookingInfo';
import { Link }from 'react-router-dom' ;
import Timer from './components/Timer';

const  Dashboard = () => {


    return (
       
       
        <Container className="container-dashboard">
            <Row className="stats-row">
                <Stats count={2} label = "boookings made today" />
                <Stats count={5} label = "boookings for today" />
                <Stats count={5} label = "boookings made today" />
            </Row>
            <Row className = "card-row" >
                <Col sm = {4} className = "latest-booking">
                <Card  >
                    <Card.Header>Latest Bookings</Card.Header> 
                    <ListGroup className="list-group-flush">
                        <BookingInfo room = "Small conference room" date = "16/09/2020" name = "Deepak Maurya"/>
                        <BookingInfo room = "Panoramic room" date = "17/09/2020" name = "Thomas"/>
                        <BookingInfo room = "Small conference room" date = "16/09/2020" name = "Dasari Ashok chakravborty"/>
                    </ListGroup>
                </Card>
                </Col>

                <Col sm={4} className = "reservation">
                <Card  >
                    <Card.Header>Reservations</Card.Header> 
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                       
                        <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                        </div>
                        <input type="date" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                        <span className='text-primary float-right'> print</span>
                        
                      
                        </ListGroupItem>
                        <ListGroupItem>
                        <div>
                                Small conference room
                            </div>
                            <div >
                                <span className="text-primary">Deepak Maurya</span>
                            </div>
                            <div>
                                Hourly slot
                        </div>
                            
                        </ListGroupItem>
                        <ListGroupItem>
                        <div>
                                Small conference room
                            </div>
                            <div >
                                <span className="text-primary">Deepak Maurya</span>
                            </div>
                            <div>
                                Hourly slot
                        </div>
                        </ListGroupItem>
                    </ListGroup>
                    </Card>
                </Col>
                <Col sm={4} className = "quick-links">
                <Card  >
                    <Card.Header>Quick Links</Card.Header> 
                    <Card.Body>
                    <Link to="">+Add booking</Link><br/>
                    <Link to="">+Add Room</Link>
                    <br/> <br/>
                    <Link to="">View Bookings</Link> <br/>
                    <Link to="">View Rooms</Link>   <br/>
                    <Link to="">View Layouts</Link> <br/>
                    <Link to="">Manage Equipment</Link> <br/>
                    <Link to="">Edit Booking form</Link> <br/>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row className = "dashboard-footer">
                <Col>
                    <span className="last-login">Last Login : 16/09/2020 9:15 </span>
                    <Timer/>
                </Col>
            </Row>
        </Container>
    
    ) ;
} 

export default Dashboard ;