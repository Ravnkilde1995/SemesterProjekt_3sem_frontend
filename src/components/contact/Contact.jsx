import React from "react";
import "./contact.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Contact = () => {
    return (
        <div className="text-center">
            <br/>
            <h1>Contact us!</h1>
            <div className="card_container">

                <Card style={{width: '22rem', margin: '25px'}}>
                    <Card.Img variant="top" src="/user-picture.png"/>
                    <Card.Body className="bg-primary text-white">
                        <Card.Title>Abdullah Marwan</Card.Title>
                        <Card.Text>
                            Developer
                        </Card.Text>
                        <Card.Text>
                            Student at the Copenhagen Business academy Lyngby, as a computer scientist. Employment:
                            Full stack programming
                        </Card.Text>
                        <Button variant="warning">Contact</Button>
                    </Card.Body>
                </Card>

                <Card style={{width: '22rem', margin: '25px'}}>
                    <Card.Img variant="top" src="/user-picture.png"/>
                    <Card.Body className="bg-primary text-white">
                        <Card.Title>Christoffer Humblebæk</Card.Title>
                        <Card.Text>
                            Developer
                        </Card.Text>
                        <Card.Text>
                            Student at the Copenhagen Business academy Lyngby, as a computer scientist. Employment:
                            Full stack programming
                        </Card.Text>
                        <Button variant="warning">Contact</Button>
                    </Card.Body>
                </Card>

                <Card style={{width: '22rem', margin: '25px'}}>
                    <Card.Img variant="top" src="/user-picture.png"/>
                    <Card.Body className="bg-primary text-white">
                        <Card.Title> Nikolaj Kaspersen</Card.Title>
                        <Card.Text>
                            Developer/SCRUM Master
                        </Card.Text>
                        <Card.Text>
                            Student at the Copenhagen Business academy Lyngby, as a computer scientist. Employment:
                            Full stack programming
                        </Card.Text>
                        <Button variant="warning">Contact</Button>
                    </Card.Body>
                </Card>

                <Card style={{width: '22rem', margin: '25px'}}>
                    <Card.Img variant="top" src="/user-picture.png"/>
                    <Card.Body className="bg-primary text-white">
                        <Card.Title> Oliver Ravnkilde</Card.Title>
                        <Card.Text>
                            Developer
                        </Card.Text>
                        <Card.Text>
                            Student at the Copenhagen Business academy Lyngby, as a computer scientist. Employment:
                            Full stack programming
                        </Card.Text>
                        <Button variant="warning">Contact</Button>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
}

export default Contact;