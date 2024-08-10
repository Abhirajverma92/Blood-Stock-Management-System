import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'; 
import { login } from "./slice";
import pic from '../img/Login.jpeg';

const init = {
  username: "",
  password: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.fld]: action.val };
    case 'reset':
      return init;
    default:
      return state;
  }
};

function Form() {
  const [msg, setMsg] = useState("....");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [info, dispatch] = useReducer(reducer, init);
  const navigate = useNavigate();
  const reduxAction = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const reqdata = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    };

    fetch("https://localhost:7021/api/Users/verification", reqdata)
      .then(resp => {
        if (!resp.ok) {
          return resp.text().then(text => { throw new Error(text); });
        }
        return resp.text();
      })
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        if (Object.keys(obj).length === 0) {
          setMsg("Wrong UID or Password");
        } else {
          console.log(JSON.stringify(obj));
          reduxAction(login());
          localStorage.setItem("LoggedUser", JSON.stringify(obj));

          if (obj.roleid === 1) {
            navigate("/hospital");
          } else if (obj.roleid === 2) {
            navigate("/bloodbank");
          } else if (obj.roleid === 3) {
            navigate("/donor");
          } else if (obj.roleid=== 4) {
            navigate("/receiver");
          }
        }
      })
      .catch(error => {
        setMsg("An error occurred: " + error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light"
         style={{ 
           backgroundImage: `url(${pic})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           minHeight: '100vh',
           padding: '20px',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'flex-start',
           alignItems: 'center',
           position: 'relative',
           color: '#000'
         }}>
      <div className="card p-4" style={{ maxWidth: "400px" }}>
        <h1 className="text-center">Login Form</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={info.username || ""}  // Ensure default value is an empty string
              onChange={(e) => dispatch({ type: 'update', fld: 'username', val: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <div className="input-group">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="form-control"
                id="password"
                value={info.password || ""}  // Ensure default value is an empty string
                onChange={(e) => dispatch({ type: 'update', fld: 'password', val: e.target.value })}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="agree" />
            <label className="form-check-label" htmlFor="agree">I Agree</label>
          </div>

          <button type="button" className="btn btn-primary w-100" onClick={handleClick}>
            LOGIN
          </button>

          <div className="mt-3 text-center">{msg}</div>
        </form>
      </div>
    </div>
  );
}

export default Form;
