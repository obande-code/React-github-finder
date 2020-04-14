import React, {Fragment , useState} from 'react';
import { BrowserRouter as Router , Switch , Route  } from "react-router-dom";
import './App.css';
import Navbar from "./component/Navbar";
import Userz from "./component/Users/Userz";
import User from "./component/Users/User";
import Search from "./component/Users/Search";
import axios from "axios";
import About from "./component/pages/About";
import Alert from "./component/Alert";
const App = () => {
   const [users, setUsers] = useState([])
   const [user, setUser] = useState([])
   const [loading, setLoading] = useState(false)
   const [alert, setAlert] = useState(null)
  // search for users
   const searchUsers = async (text) =>{
  setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setUsers(res.data.items);
    setLoading(false); 
  }
  // get user
  const getUser = async userName =>{

    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setUser(res.data);
    setLoading(false); 

  }
  // clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false); 
  }

  // set alert
  const showAlert = (msg , type) =>{
        setAlert({msg , type});
        setTimeout(()=>setAlert(null), 5000)
  }
 

    return (
      <Router>
      <div className="App">
        <Navbar title='Github-Finder' />
        <div className = "container">
        <Alert  alert={alert} />
        <Switch>
          <Route exact path = "/" render = {props => (
            <Fragment>

              <Search  
              searchUsers = {searchUsers} 
              clearUsers = {clearUsers} 
              showClear = {users.length > 0 ? true : false}
              setAlert = {showAlert} />
              <Userz loading = {loading} users= {users}  />
            </Fragment>
          )} />
          <Route  path = "/about"> <About/> </Route>  
          <Route  path = "/user/:login" render = {props =>(
            <User {...props} getUser = {getUser} user={user} />
          )} />
        </Switch>
        </div>

      </div>
      </Router> 
    );
  }



export default App;
