import "./LoginUi.css";
import React, { useEffect, useState } from "react";

import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import { BsArrowRightSquareFill } from "react-icons/bs";

import Admin from "../Admin/Admin";

function LoginUi() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [tool, setTool] = useState("");
  const [location, setLocation] = useState("");
  let storageArray = [];

  let dataArray = [];

  const Users = [
    {
      userID: 1,
      label: "User01",
    },
    {
      userID: 2,
      label: "User02",
    },
    {
      userID: 3,
      label: "User03",
    },
    {
      userID: 4,
      label: "Admin",
    },
  ];

  const Tool = [
    {
      userID: 1,
      label: "Tool01",
    },
    {
      userID: 2,
      label: "Tool02",
    },
    {
      userID: 3,
      label: "Tool03",
    },
  ];

  const Locations = [
    {
      userID: 1,
      label: "Location01",
    },
    {
      userID: 2,
      label: "Location02",
    },
    {
      userID: 3,
      label: "Location03",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (user === "User01" && password === "1") ||
      (user === "User02" && password === "2") ||
      (user === "User03" && password === "3")
    ) {
      setShow(true);
      setLoginStatus(true);
    } else if (user === "Admin" && password === "admin") {
      storageArray = JSON.parse(localStorage.getItem("my_data"));
      console.log(storageArray);
      setAdmin(true);
      setLoginStatus(true);
    } else {
      alert("Please enter valid credentials");
    }
  };

  const handleControlSubmit = (e) => {
    e.preventDefault();
    if (tool && location) {
      // setShow(false);
      // setLoginStatus(false)
      console.log(tool, location);
      const New = {
        user: user,
        tool: tool,
        location: location,
      };
      dataArray.push(New);
      localStorage.setItem("my_data", JSON.stringify(dataArray));
      window.location.reload()
    } else {
      alert("Please choose valid values");
    }
  };


  return (
    <div>
      {!loginStatus && (
        <div className="main">
          <div className="sub-main">
            <div>
              <div>
                <h1>Login Page</h1>
                <form style={{ marginTop: "40px" }} onSubmit={handleSubmit}>
                  <div className="form-group mt-50">
                    <div className="row mb-3">
                      <label htmlFor="" className="col-3 col-form-label ms-4">
                        Username
                      </label>
                      <div className="col-sm-7">
                        <select
                          className="form-select"
                          onChange={(e) => setUser(e.target.value)}
                        >
                          <option selected>Select User</option>
                          {Users.map((user) => (
                            <option value={user.label}>{user.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div className="row mb-3">
                      <label htmlFor="" className="col-3 col-form-label ms-4">
                        password
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-button">
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {show === true ? (
        <div className="main">
          <div className="sub-main">
            <div>
              <div>
                <h1>Control Page</h1>
                <form
                  style={{ marginTop: "40px" }}
                  onSubmit={handleControlSubmit}
                >
                  <div className="form-group mt-50">
                    <div className="row mb-3">
                      <label htmlFor="" className="col-3 col-form-label ms-4">
                        Tool number
                      </label>
                      <div className="col-sm-7">
                        <select
                          className="form-select"
                          onChange={(e) => setTool(e.target.value)}
                        >
                          <option selected>Select Tool</option>
                          {Tool.map((tool) => (
                            <option value={tool.label}>{tool.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div className="row mb-3">
                      <label htmlFor="" className="col-3 col-form-label ms-4">
                        Location
                      </label>
                      <div className="col-sm-7">
                        <select
                          className="form-select"
                          onChange={(e) => setLocation(e.target.value)}
                        >
                          <option selected>Select User</option>
                          {Locations.map((Locations) => (
                            <option value={Locations.label}>
                              {Locations.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="login-button">
                    <button className="submitButton" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {admin === true ? <Admin /> : ""}
    </div>
  );
}

export default LoginUi;
