import React, { useEffect, useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../Firebase"

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signupacc = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      }).catch((err) => {
        console.log(err)
        alert("Error")
      })
  }

  return (
    <>
      <div className="form__back">
      </div>
      <form className="login__form">
          <h1> Login </h1>
          <div>
            <label> Email </label>
            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label> Password </label>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className='btn'><button onClick={signupacc}> Login </button></div>
          <p> Don't have an account? <Link to="/signup">Signup</Link>  </p>
        </form>
    </>
  )
}

export default Login