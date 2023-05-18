import React from "react";
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const About = () => {
    return (

        <div className="text-center">
            <br/>
            <h1>About our program!</h1>
            <br/>
            <div className="card_container">

                <Card style={{width: '16rem'}}>
                    <Card.Img variant="top" src="/Book-Icon.png"/>
                    <Card.Body className="bg-primary text-white">
                        <Card.Title>Check out our Library</Card.Title>
                        {/*<Card.Text>*/}
                        {/*    Developer*/}
                        {/*</Card.Text>*/}
                        <Card.Text>
                            Browse through our selection of books, and add them to your bookshelf.
                            Most every book will be accompanied by a short description, info about the author and more.
                        </Card.Text>
                        {/*<Button variant="warning" href="/library">Library</Button>*/}
                    </Card.Body>
                </Card>

                <Card style={{width: '16rem'}}>
                    <Card.Img variant="top" src="/Book-Icon.png"/>
                    <Card.Body className="bg-primary text-white">
                        <Card.Title>Add Books to Bookshelf</Card.Title>
                        {/*<Card.Text>*/}
                        {/*    Developer*/}
                        {/*</Card.Text>*/}
                        <Card.Text>
                            After logging in or signing up, you can make full use of the app and start adding books to your Bookshelf.
                            Afterwards, you can get started reading, by opening your Bookshelf and chose your book from there.
                        </Card.Text>
                        {/*<Button variant="warning" href="/registration">Sign up</Button>*/}
                    </Card.Body>
                </Card>

                <Card style={{width: '16rem'}}>
                    <Card.Img variant="top" src="/Book-Icon.png"/>
                    <Card.Body className="bg-primary text-white">
                        <Card.Title>And review them</Card.Title>
                        {/*<Card.Text>*/}
                        {/*    Developer/SCRUM Master*/}
                        {/*</Card.Text>*/}
                        <Card.Text>
                            At any point, while reading a book, you can leave a review, and let others know what you think.
                            You are not required to leave a review, but it is highly encouraged and you will be asked to review the book.
                        </Card.Text>
                        {/*<Button variant="warning">Review</Button>*/}
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
}

export default About;