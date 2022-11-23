

// import { Outlet, Navigate } from 'react-router-dom'

// const Protected = () => {
//     let auth = {'token':false}
//     return(
//         auth.token ? <Outlet/> : <Navigate to="/login"/>
//     )
// }

// export default Protected



import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {

    const isLogin = localStorage.getItem("isLogin");
    console.log("Is User Login?", isLogin);

    return (
        isLogin ? children : <Navigate to="/login" />
    );
}

export default Protected;







// import React, { useEffect, useState } from 'react'
// import { Navigate, Outlet, useNavigate } from 'react-router-dom';

// // const useAuth = ()=>{
// //     const user = { loggedIn: false };
// //     return user && user.loggedIn;
// // }

// export default function Protected() {

//     const [isAuth, setIsAuth] = useState();

//     // const navigate = useNavigate();

//     // useEffect(()=>{
//     //     if(isAuth){
//     //       navigate("/login");
//     //     }
//     //   }, [])

//     // const {Component} = props

//     // const navigate = useNavigate();

//     // useEffect(()=>{
//     //     let login = localStorage.getItem('/login');
//     //     if(!login){
//     //         navigate("/login");
//     //     }
//     // })

// //    const isAuth = useAuth();

//     // let auth = {'token' : false }

//     // const isLogin = localStorage.getItem("isLogin");
//     // console.log("Is User Login?" , isLogin);

//    return !isAuth ? <Outlet/> : <Navigate to="/login" /> 
// //    isLogged ? <Outlet/> : <Navigate to="/login"/>
//         {/* <Component /> */}    
// }
