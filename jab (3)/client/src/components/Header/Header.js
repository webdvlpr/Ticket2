import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { Card, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { userid } from '../../store';

function Header() {
  const userId=  localStorage.getItem("userId")
  const navigate= useNavigate()
  const dispatch = useDispatch();

  const logoutfunction=(e)=>{
    dispatch(userid.logout())
    navigate('/signUp')
  }


  return (
    <header id="hero-area" data-stellar-background-ratio="0.5">
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
        <div className="container">
          <div className="navbar-header">
            <a href="index.html" className="navbar-brand"><img className="img-fulid" src="./img/logo.png" alt="asdf" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
              aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <i className="lnr lnr-menu"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <button style={{
                  background: "none",
                  border: "none",
                  padding: "0 !important",
                  cursor: "pointer",
                }}onClick={()=>{navigate('/')}} className="nav-link page-scroll " >Home</button>
              </li>
              <li className="nav-item">
                <button style={{
                  background: "none",
                  border: "none",
                  padding: "0 !important",
                  cursor: "pointer",
                }}onClick={()=>{navigate('/newticket')}} className="nav-link page-scroll" >Tickets</button>
              </li>
              <li className="nav-item">
                {userId ? 

                <button style={{
                  background: "none",
                  border: "none",
                  padding: "0 !important",
                  cursor: "pointer",
                }}onClick={logoutfunction} className="nav-link page-scroll" >Logout</button>
                :
                <button style={{
                  background: "none",
                  border: "none",
                  padding: "0 !important",
                  cursor: "pointer",
                }}onClick={()=>{navigate('/signUp')}} className="nav-link page-scroll" >Register</button>
                }
              </li>
            </ul>
          </div>
        </div>
        <ul className="mobile-menu">
          <li>
            <a className="page-scroll" href="#hero-area">Home</a>
          </li>
          <li>
            <a className="page-scroll" href="#services">Tickets</a>
          </li>
          <li>
            <a className="page-scroll" href="#features">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header