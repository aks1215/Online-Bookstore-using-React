import React,{useContext} from 'react'
import {AuthContext} from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Reg() {
  const {signUpWithGmail,createUser}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || '/'

  const handleGoogleSignUp=()=>{
      console.log("hello")
      signUpWithGmail().then((results)=>{
        const user=results.user
        console.log(user)
      })
  };
  const handleSignUp=(event)=>{
    event.preventDefault()
    const form=event.target
    const email=form.email.value
    const password=form.password.value
    createUser(email,password).then((userCredentials)=>{
      const user=userCredentials.user
      console.log(user)
    })
    //console.log("hello sign up")
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-5">
            <h1>User Registration</h1>
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input name="email" className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input name="password" className="form-control"></input>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary">Register</button>
                Already have an account? 
                <Link to="/login">Login</Link>
              </div>
            </form>

            <button className="btn btn-primary" onClick={handleGoogleSignUp}>Sign in with google</button>
          </div>
        </div>
      </div>
    </>
  )
}
