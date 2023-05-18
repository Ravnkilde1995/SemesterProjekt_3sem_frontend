import React, {useEffect, useState} from "react";
import "./admin.css"
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import facade from "../../apiFacade.js";

const Admin = () => {
    const [dataFromServer, setDataFromServer] = useState("Loading...");
    // Bog data gemmes på en liste med useState
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        facade.fetchAllBookshelfData().then((res) => {
            //Hvis fetch respsonse har data, tilføjes det til bookList med setBookList

            if (res) {
                setBookList(res);
                console.log(res)
            }
            setDataFromServer(res.msg);
            // console.log(res.items)
        });
    }, []);

    return (
        <div>
            <br></br>
            <h1>List of all bookshelves</h1>
            <h3>{dataFromServer}</h3>

            {/*Vi mapper hvert item vi har fetchet */}

            {bookList.map((item) => {
                //console.log("hello hello", items);
                //console.log("Nummer 2", item.id);
                //console.log("Nummer 3", item.etag);

                return (
                    <>
                        <br/>

                        <Table className="table table-info" bordered hover>
                            <thead>
                            <tr>
                                <th style={{width: "20%"}}>Title</th>
                                <th style={{width: "12%"}}>Author</th>
                                {/*<th style={{width: "9%"}}>Category</th>*/}
                                <th style={{width: "44%"}}>Description</th>
                                <th style={{width: "6%"}}>Delete Book</th>
                                <th style={{width: "9%"}}>Check Reviews</th>
                            </tr>
                            </thead>
                            <tbody key={item.id}>
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                {/*<td>{item.category}</td>*/}
                                <td>{item.description}</td>
                                <td>
                                    {/* der skal nok tilføjes en user hertil */}
                                    <Button
                                        //TODO Remove chosen book from the user's Database
                                        //onClick={() => addBook(item.volumeInfo.title, item.volumeInfo.authors, item.volumeInfo.description)}
                                        className="btn btn-danger">
                                        Delete Book
                                    </Button>
                                </td>
                                <td>
                                    {/* der skal nok tilføjes en user hertil */}
                                    <Button
                                        //TODO Method to show all book reviews
                                        //onClick={() => addReview(review_text, )}
                                        className="btn btn-primary">
                                        Check Book Reviews
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </>
                );
            })}
        </div>
    );

}

export default Admin;