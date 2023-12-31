import React, { Component, useState } from 'react';
import NavBars from "../Sections/navbar";
import LoginImage from "../Assets/Login.jpeg";
import "../Components/Signup.css";
import axios from 'axios';
import registerValidation from './Validation/registerValidation';

    function Signup(){

      const [credentials, setCredentials] = useState({
        name:'',
        email:'',
        password:''
      });

      const [errors, setErrors]=useState({});

      // const [userData, setUserData] = useState();
      const [responseData, setResponseData] = useState({});
  
      function handleInput(e) {
          setCredentials({ ...credentials, [e.target.name]: e.target.value })  
              
          };
  
      function signup(e) {
          e.preventDefault();
          setErrors(registerValidation(credentials));  
          let url = `http://localhost:8080/customer/register`;
          axios.post(url,credentials).then((response) => {
              console.log(response.data);
              setResponseData(response);
              if(response.data.status)
                  alert("Registered");
              else
                  alert("Please fill all the details!");
              })
          }

    return (
        <>
        <NavBars/>
        
        {/* <div className="section-area account-wraper2"> */}
        <div className="container sign-up">
          <div className="row justify-content-center">
             <div className="col-xl-5 col-lg-8 col-md-8">
              {/* <div className="appointment-form form-wraper"> */}
                <form onSubmit={signup} method="post">
                    <div><h3>Sign Up</h3></div>
                    <div className="mb-3">
                    <label><h6>Full name</h6></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="name"
                        onChange={handleInput}
                        
                    />
                    {errors.name && <p style={{color:"red", fontsize: "14px"}}>{errors.name}</p>}
                    </div>
                    {/* <div className="mb-3">
                    <label><h6>Age</h6></label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Age"
                        name="age"
                        onChange={handleInput}
                        required
                    />
                    </div> */}
                    {/* <div className="mb-3">
                    <label><h6>Blood Group</h6></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="bloodGroup"
                        name="bloodGroup"
                        onChange={handleInput}
                        required
                    />
                    </div> */}
                    <div className="mb-3">
                    <label><h6>Email address</h6></label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        onChange={handleInput}
                     
                    />
                    {errors.email && <p style={{color:"red", fontsize: "14px"}}>{errors.email}</p>}
                    </div>
                    {/* <div className="mb-3">
                    <label><h6>Gender </h6></label>
                  
                    <select id="gender" className="form-control" name="gender">
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    required
                    </select>
                    </div>  */}
                    {/* <div className="mb-3">
                    <label><h6>Contact No.</h6></label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Number"
                        name="contactNo"
                        required
                    />
                    </div> */}
                    {/* <div className="mb-3">
                    <label><h6>Date of Birth</h6></label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Date Of Birth"
                        name="dateOfBirth"
                        required
                    />
                    </div> */}
                    <div className="mb-3">
                    <label><h6>Password</h6></label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        onChange={handleInput}
                     
                    />
                     {errors.password && <p style={{color:"red", fontsize: "14px"}}>{errors.password}</p>}
                    </div>
                    {/* <div className="mb-3">
                    <label><h6>Confirm Password</h6></label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="confirmPassword"
                        required
                    />
                    </div> */}
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                    </div>
                    <div>
                    <p className="forgot-password text-right">
                    Already registered <a href="/Login">Log in?</a>
                    </p>
                    </div>
                    
                </form>
              {/* {/* </div> */}
            {/* </div>  */}
            
          </div>
        </div>
      </div>
      </>
    )
  }
// }

export default Signup;