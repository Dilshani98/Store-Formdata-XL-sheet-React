import React ,{ useEffect, useState } from 'react'
import { BsArrowRightSquareFill } from "react-icons/bs";
import axios from "axios";


export default function ControlPage() {
console.log('test',JSON.parse(localStorage.getItem("my_data")))
const [user, setUser] = useState(JSON.parse(localStorage.getItem("my_data"))[0].user);
  const [tool, setTool] = useState(JSON.parse(localStorage.getItem("my_data"))[0].tool);
  const [location, setLocation] = useState(JSON.parse(localStorage.getItem("my_data"))[0].location);


const Proceed = (e) => {
  e.preventDefault();
  const data = {
    User :JSON.parse(localStorage.getItem("my_data"))[0].user,
    Tool: JSON.parse(localStorage.getItem("my_data"))[0].tool,
    Location: JSON.parse(localStorage.getItem("my_data"))[0].location,
  };

  axios
    .post(
      "https://sheet.best/api/sheets/5da4ebec-747b-4253-920e-89f2d9a35826",
      data
    )
    .then((response) => {
      console.log(response);
      setUser("")
      setTool("")
      setLocation("")
    });
};

  return (
    <div>
      <div className="main">
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              height: "90%",
              width: "90%",
              boxShadow: "11px 12px 13px 12px rgb(207, 207, 207)",
              paddingTop: "0px",
              borderRadius: "60px",
              backgroundColor: "white",
            }}
          >
            <div>
              <h1>Admin Page</h1>
              <br />
              <table class="table">
                <thead>
                  <tr>
                 
                    <th scope="col">User</th>
                    <th scope="col">Tool</th>
                    <th scope="col">Location</th>
                    <th scope="col">Proceed</th>
                  </tr>
                </thead>
                <tbody>
               
                
                  <tr>
                  
                 
                    <td>{user}</td>
                    <td>{tool}</td>
                    <td>{location}</td>
                    <td><div>
                        <BsArrowRightSquareFill
                          size={30}
                          onClick={(e) =>Proceed(e)}
                        >
                          Proceed
                        </BsArrowRightSquareFill>
                      </div></td>
                  </tr>

                </tbody>
              </table>
              {/* <table
                style={{ width: "100%" }}
                className=" table table-borderless"
              >
                <tbody>
                  <tr>
                    <td>
                      <h4>Tool :</h4>
                    </td>
                    <td>
                      <h4>{tool}</h4>
                    </td>
                  </tr>
                  <tr style={{ marginTop: "0" }}>
                    <td>
                      <h4>Location :</h4>
                    </td>
                    <td>
                      <h4>{location}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div>
                        <button
                          className="submitButton"
                          type="submit"
                          onClick={(e) => Proceed(e)}
                        >
                          Proceed
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
    </div>
  )
}
