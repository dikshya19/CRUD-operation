import React, { Component } from 'react'
import CreateAssignment from './Ccreate'
import CreateAssignment1 from './CreateAssignment1'
import Cview from './Cview'
import ViewAssignment from './ViewAssignment'

export default class Cfunc extends Component {

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
  
handleInput = (e) =>{
    this.setState({
        [e.target.name]:e.target.value
    })
}


handleSubmit=(e)=>{
  this.setState (
   e.preventDefault())
    this.setState({
    name:"",
    username:"",
    email:"",
    status:""
})
}

handleEdit=(item)
    render() {
        return (
            <div>
                <CreateAssignment1
                  students={this.state.students}
                 handleInput={this.handleInput}
                 handleSubmit={this.handleSubmit} />

                 <ViewAssignment/>
                {/* <Cview /> */}
            </div>
        )
    }
}