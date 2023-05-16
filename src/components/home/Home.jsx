import React from "react";
import "./home.css";

const Home = () => {
    return (
        <div>
            <div className="jumbotron" >
                <h1 className="display-4">Welcome to the E-book library</h1>
                <p className="lead">
                    If you have an existing account, you can log in and look through our selection of books, and add them to your bookshelf.
                    <br/>
                    <br/>
                    If you want to know more, you can read about the project on our about page.
                </p>
                <a className="btn btn-primary btn-lg" href="/about" role="button">About</a>
                <hr className="my-4" />
                <p>
                    If you don't have an account, you can create one by clicking the button below, and get started in just a few minutes.
                </p>
                <a className="btn btn-primary btn-lg" href="/registration" role="button">Sign up!</a>
            </div>
        </div>
    );
}

export default Home;