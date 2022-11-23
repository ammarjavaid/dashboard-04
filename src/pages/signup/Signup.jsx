import React, { useState } from 'react'
import "./signup.scss"
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../Firebase"

const Signup = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = (e) => {
    
  }

  const signupacc = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch(error => alert("Error..!"))
  }

  return (
    <>
      <div className="form__back">
      </div>
      <form className="login__form">
        <h1> Create an Account </h1>
        <div>
          <label> Username </label>
          <input type="text" placeholder='Enter email or phone' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label> Create Password </label>
          <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='btn'><button onClick={signupacc}> Signup </button></div>
        <p> Already have an account? <Link to="/">Login</Link>  </p>
      </form>
    </>
  )
}

export default Signup