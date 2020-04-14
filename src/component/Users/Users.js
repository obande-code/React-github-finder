import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"



const Users= ({user : {avatar_url , login, html_url}}) => {
        
        return (
            <div>
                <div className = "card" style = {{display : 'flex'}}>
                    <div className = "card-body">
                       <img src = {avatar_url}
                       alt = "images"
                       className = 'round-img'
                    style = {{ width : '60px' }}
                     />
                    </div>
                <h5>{login}</h5>
                <Link className="btn btn-dark  mx-auto" to = {`/user/${login}`} style= {{width:'100px'}}>More..</Link>
                </div>
            </div>
        )
    }


export default Users
Users.prototype ={
   user : PropTypes.object.isRequired,
}
