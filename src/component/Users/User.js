import React, { useEffect, Fragment } from 'react'
import { Link } from "react-router-dom";

const User = ({user, getUser, match}) => {
      useEffect(()=>{
          getUser(match.params.login)
      }) 

      const {
         
          name,
          avatar_url,
          location,
          hireable
      } = user;
  
        return (
            <Fragment>
                <Link to="/" className="btn btn-light" style= {{marginTop:"20px", float:"left"}}>Back to search</Link>
                Hireable : {' '}
                 {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}

                 <div className="card-grid-2">
                     <div className="all center">
                         <img src = {avatar_url} alt="" className="round-img" style={{width:"150px"}} />
                         <h1>{name}</h1>
                         <p>
                             Location :      {location}
                         </p>
                     </div>
                 </div>
            </Fragment>
        )
    }

export default User
