import React from 'react';

export default function CruView(props) {
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
                              {/* <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button> */}
                              <td><button onClick={ props.handleEdit(index)}>Edit</button></td>
                          </tr>
                      })}
                  </tbody>
              </table>

        </div>
    )
}