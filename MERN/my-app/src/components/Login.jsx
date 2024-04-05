import React,{useContext,useState} from 'react';
import './Login.css'
import {useLocation, useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthProvider";
export default function Login() {
  const {login}=useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || '/'
  const handleSignIn=(e)=>{
    e.preventDefault()   
      login(email,password).then((userCredentials)=>{
      const user=userCredentials.user
      navigate("/")
      console.log("success")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
  });
  };
  return (
 <div className="container">
  <form >
  <div className="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    onChange = {(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" 
    className="form-control" 
    id="exampleInputPassword1"
    onChange = {(e) => setPassword(e.target.value)}
    />
  </div>
  <div classname="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label classname="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick = {(e) => handleSignIn(e)}>Login</button>
</form>
  </div>
  )
}
