import React, {useEffect, useState} from 'react';
import facade from "../../apiFacade.js";

function Review() {

    const [bookshelfId, setBookshelfId] = useState(0);
    const [bookId, setBookId] = useState(0);
    const [reviewScore, setReviewScore] = useState();
    const [reviewText, setReviewText] = useState("");

    const review = (evt) => {
        evt.preventDefault();
        facade.review(bookshelfId, reviewScore, reviewText);
    }

    const onChange = (e) => {
        const { id, value } = e.target;
        if (id === "reviewScore") {
            setReviewScore(value);
        }
        if (id === "reviewText") {
            setReviewText(value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        facade.review(bookshelfId, bookId, reviewScore, reviewText);
        console.log("Review submitted");
    }

    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <input
                    className="form_control" type="text"
                    placeholder="Enter Review"
                    value="reviews"
                    onChange={onChange}

                />
                <button className="btn btn-primary" type="submit">Review</button>
            </form>

        </div>
    );
}

export default Review;