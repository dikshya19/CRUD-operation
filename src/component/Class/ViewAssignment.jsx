import React, { Component } from 'react'

export default class ViewAssignment extends Component {
    render() {
        return (
            
                 <div>
            <table>   
                  <thead>
                   <tr>
                      <td>Name</td>
                      <td>Username</td>
                      <td>Email</td>
                      <td>Status</td>
                      </tr>
                  </thead>
                  <tbody>
                      {props.records.map((item, index) => {
                          return <tr key={index}>
                              <td>{item.name}</td>
                              <td>{item.username}</td>
                              <td>{item.email}</td>
                              <td>{item.status}</td>
                              <td><button onClick={()=>this.props.handleEdit(item)}>Edit</button></td> 
                          </tr>
                      })}
                  </tbody>
              </table>
            </div>
        )
    }
}
