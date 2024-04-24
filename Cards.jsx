import React from 'react'
import { Stack } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import "./Cards.css"
function Cards() {
    return (
      <div>
            <div className='row mb-3 d-flex justify-content-center align-items-center'>
                <div className='col-md-6 col-12 d-flex justify-content-center align-items-center flex-column'>
                    <div className="card-container">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title className='mb-4' style={{fontWeight:"bold"}}><h1>Electrifying Innovation</h1></Card.Title>
                                <Card.Text>
                                    Our Mission is to revolutionize electric mobility in India, one race at a time, with eco-friendly and high-performance electric cars.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title className='mb-3' style={{fontWeight:"bold"}}><h1>Speeding Towards Excellence</h1></Card.Title>
                                <Card.Text>
                                    We're on a mission to achieve excellence in Formula Student Electric racing, showcasing our cutting-edge design on a global stage.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 col-12 d-flex justify-content-center align-items-center flex-column'>
                    <div className="card-container">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title className='mb-3' style={{fontWeight:"bold",}}><h1>Driving India's Green Revolution</h1></Card.Title>
                                <Card.Text>
                                    Our Mission is to revolutionize electric mobility in India, one race at a time, with eco-friendly and high-performance electric cars.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title className='mb-4' style={{fontWeight:"bold"}}><h1>Engineering the Future</h1></Card.Title>
                                <Card.Text>
                                    At IIT Bombay Racing, we're on the mission to engineer a brighter, greener future through innovation, dedication, and teamwork.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
