import React from "react";
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const About = () => {
    return (
        <div className="card_container">
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="/Book-Icon.png" />
                <Card.Body>
                    <Card.Title>Add Books to Bookshelf</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

             

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Book-Icon.png"  />
                <Card.Body>
                    <Card.Title>Check out the Library</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/Book-Icon.png"  />
                <Card.Body>
                    <Card.Title>Review your books</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
}

export default About;