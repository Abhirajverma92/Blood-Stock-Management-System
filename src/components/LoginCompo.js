import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'; 
import { login } from "./slice";
import pic from '../img/Login.jpeg';


const init = {
  uname: "",
  pwd: ""
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
        if (resp.status === 401) {
          return "";
        }
        return resp.text();
      })
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        if (Object.keys(obj).length === 0) {
          setMsg("Wrong UID or Password");
      } else {
          console.log(JSON.stringify(obj))
          reduxAction(login())
          localStorage.setItem("LoggedUser",JSON.stringify(obj));
          
          if (obj.roleids === 1) {
              navigate("/admin")
          } else if (obj.roleids === 2) {
              navigate("/singleuser")
          } else if (obj.roleids === 3) {
              navigate("/home")
          } else if (obj.roleids === 4) {
              navigate("/department")
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
            <label htmlFor="uid" className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              id="uid"
              value={info.uname}
              onChange={(e) => dispatch({ type: 'update', fld: 'uname', val: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
            <div className="input-group">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="form-control"
                id="pwd"
                value={info.pwd}
                onChange={(e) => dispatch({ type: 'update', fld: 'pwd', val: e.target.value })}
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
