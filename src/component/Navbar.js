import React from 'react'
import { Link } from "react-router-dom";


const Navbar = props =>  {
    
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <i className="fab fa-github fa-3x" style={{ color: 'white', margin: '10px' }}></i>
            <h4 style={{color:'white'}}>{props.title}</h4>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            <Link class="nav-link" to="/" >Home</Link>
            </li>
            <li class="nav-item active">
            <Link class="nav-link" to="/about" >About</Link>
            </li>
            </ul>
        </div>
     </nav>
        )
    }

export default Navbar
