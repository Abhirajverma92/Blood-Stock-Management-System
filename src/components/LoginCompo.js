import React, { useEffect, useState } from "react";

function Form() {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const [msg, setMsg] = useState("....");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 

  const handleClick = () => {
    if (uid === "abhiraj" && pwd === "abhi@123") {
      setMsg("Welcome " + uid);
    } else {
      setMsg("Login failed");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4" style={{ maxWidth: "400px" }}>
        <h1 className="text-center">Login Form</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="uid" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="uid"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <div className="input-group">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="form-control"
                id="pwd"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
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
            <label className="form-check-label" htmlFor="agree">
              I Agree
            </label>
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
