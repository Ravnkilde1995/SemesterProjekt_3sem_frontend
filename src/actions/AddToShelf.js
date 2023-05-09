import {useEffect, useState} from "react";
import facade from "../apiFacade.js";

import React from "react";
import Table from "react-bootstrap/Table";
import bookshelf from "../components/bookshelf/Bookshelf.jsx";


const fetchData = () => {
    return fetch("https://www.googleapis.com/books/v1/volumes?q=")
        .then((res) => res.json())
        .then((data) => {
            return data;
        }
        );
}

const addToShelf = ({username, bookid}) => {
    const bookshelf = fetchData("bookshelf") ?? [];

    const existingBookshelf = fetchData("bookshelf") ?? [];


}


//
// const addToShelf = () => {
//
//
//
//
//     // Bog data gemmes på en liste med useState
//     const [bookshelf, setBookshelf] = useState([]);
//
//     useEffect(() => {
//         facade.fetchDataGoogle().then((res) => {
//             //Hvis fetch respsonse har data, tilføjes det til bookList med setBookList
//             if (res.items) {
//                 setBookshelf(res.items);
//             }
//             //console.log("I useEffect ", bookList);
//             setDataFromServer(res.msg);
//         });
//     }, []);


// export default class addToShelf {
// }