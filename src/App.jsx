import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import facade from "./apiFacade";
import LogIn from "./components/loginform/LoginForm.jsx";
import LoggedIn from "./components/loggedin/LoggedIn.jsx";
import Home from "./components/home/Home.jsx";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import {Route, Routes} from "react-router-dom";
import apiFacade from "./apiFacade";
import Library from "./components/library/Library.jsx";


function App() {
    const [loggedIn, setLoggedIn] = useState(apiFacade.loggedIn());
    const [user, setUser] = useState({username: "", roles: ""});


    return (
        <div>

            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/login"
                       element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>}/>

            </Routes>


            {/* <Home/> */}
            {/* <About/> */}
            {/* <Library/> */}

        </div>
    )
}

export default App;