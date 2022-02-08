import React, { Component } from 'react'

export default class CreateAssignment1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            students:[   
                { name:"",
                 username:"",
                 email:"",
                 status:""
              }
            ]
        }
    }
    
    render() {
        const students = this.props.students;
        //const {name,username,email,status} = this.state;
        // const handleInput = this.props.handleInput();
        // const handleSubmit = this.props.handleSubmit();
        return (
            <div>
                
            
          
            {/* <form onSubmit={props.operation === 'save' ? props.handleSubmit : props.handleUpdate} > */}
               <form onSubmit = {this.props.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" placeholder="type"
                onChange={this.props.handleInput}  value={props.name}  />
                <label>Username</label>
                <input type="text" name="username" placeholder="type"
                onChange={this.props.handleInput}  value={props.username}  />
                <label>Email</label>
                <input type="email" name="email" placeholder="type"
                onChange={this.props.handleInput}  value={props.email}  />
                                 <label>status</label>
                 <select name="status" onChange={this.props.handleInput}     value={props.status}>
                          <option value = "Active" >Active</option>
                          <option value="Inactive">Inactive</option>

                      </select><br/>

                      {/* <button type="submit">{props.operation === 'save' ? "Submit" : "Update"}</button> */}

                   <button type="submit">submit</button>
            </form>
            
            </div>
        )
    }
}