import React from "react";
import "./registration.css";

const Registration = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const user = {};
  (user.username = username), (user.password = password);
  console.log(user);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    // fetch til
    const url = "http://localhost:8080/api/info";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    fetch(url, options).then((res) => {
      console.log(res);
      return res.json();
    });
    //hertil
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="username">
            Username{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={username}
            onChange={(e) => handleInputChange(e)}
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default Registration;