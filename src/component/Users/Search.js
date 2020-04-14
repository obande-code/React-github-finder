import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text : ''
    };
    
    onSubmit = (e) =>{
        e.preventDefault();
        if (this.state.text === '') {
           this.props.setAlert('please enter a text', 'danger') 
        }else{

            this.props.searchUsers(this.state.text);
            this.setState({text : ''})
        }
    }
    onChange = (e ) => {
        e.preventDefault();
       this.setState({ text : e.target.value})
    }
    
    render() {
        const { showClear , clearUsers } = this.props;
        return (
            <div>
               <form onSubmit = {this.onSubmit} className="form-group">
                   <input
                   type = 'text'
                   value = {this.state.text}
                   placeholder="Search User..."
                   className = "form-control"
                   style = {{marginTop : '20px', 
                   marginBottom : "10px"}}
                   onChange = {this.onChange}
                    />
                   <button className="btn btn-dark btn-block">Search</button>  
                </form>
                {showClear && 
                <button className="btn btn-danger btn-block" onClick = {clearUsers}>Clear</button> }
                
            </div>
        )
    }
}

export default Search
