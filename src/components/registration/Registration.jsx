import React from "react";
import "./registration.css";

const Registration = () => {
    
    
    return(
<>
        

      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="username">Username </label>
                  <input className="form__input" type="text" id="username" placeholder="Username"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div class="footer">
              <button type="submit" class="btn">Register</button>
              </div>
         </div>
      </div>

      </>
          )
          ;
}

export default Registration;