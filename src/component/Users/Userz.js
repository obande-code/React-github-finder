import React, { Component } from 'react'
import Users from "../Users/Users";

 class Userz extends Component {
         
    render() {
        return (
            <div style = {userStyle}>
               {this.props.users.map(user =>(
                   <Users key = {user.id}   user={user}  />
               ))} 
            </div>
        )
    }
}

export default Userz

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3 , 1fr)',
    gridGap: '1rem',
    margin : '20px'
}
