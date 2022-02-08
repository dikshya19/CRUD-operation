import React from 'react'
export default function CruCreate(props) {

    return (
        <div className="box">
            <form onSubmit={props.handleSubmit} autocomplete="off">
                <label>Name</label>
                <input type="text" name="name" placeholder="type"
                onChange={props.handleInput}  value={props.data.name}  />
                <label>Username</label>
                <input type="text" name="username" placeholder="type"
                onChange={props.handleInput}  value={props.data.username}  />
                <label>Email</label>
                <input type="email" name="email" placeholder="type"
                onChange={props.handleInput}  value={props.data.email}  />
                                 <label>status</label>
                 <select name="status" onChange={props.handleInput}     value={props.data.status}>
                          <option value = "Active" >Active</option>
                          <option value="Inactive">Inactive</option>

                      </select><br/>

                      <button type="submit">Submit</button>

            
            </form>
        </div>
    )
}