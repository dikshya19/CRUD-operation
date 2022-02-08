import React, { Component } from 'react';


class Edit extends Component {

  constructor(props){
    super(props);
    this.state={
    
      act: 0,
      index: '',
      datas: []
    }
  } 
  // act is used for remove and update case

  componentDidMount(){
    this.refs.name.focus();
  }
// for keeping focus on fiel

  fSubmit = (e) =>{
    e.preventDefault();
    //save
  

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let userName = this.refs.userName.value;
    let email =this.refs.email.value;
    let status =this.refs.status.value;

    // these name,username are not declared on state so they are used here

    if(this.state.act === 0){   //new
      let data = {
        name, userName,email,status
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].userName = userName;
      datas[index].email =email;
      datas[index].status =status;
      // edit vsko data lai update garni


    }    

    this.setState({
      datas: datas,
      act: 0
    });

    // changedstate

    this.refs.myForm.reset();
    this.refs.name.focus();
    // myForm indicate all form and reset and focus after form submit
  }

  fRemove = (i) => {//i refers to index and about aplice you know it
    let datas = this.state.datas; // this.state
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();// same as above
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];// edit i index 0,1,2 name username these are field 
    this.refs.name.value = data.name;
    this.refs.userName.value = data.userName;
    this.refs.email.value = data.email;
    this.refs.status.value=data.status;


    this.setState({
      act: 1,// check line number 35 if else condition
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>create</h2>
        <form ref="myForm" className="myForm">
          <label>Name</label>
          <input type="text" ref="name" placeholder="your name" className="formField" /><br></br>
          <label>Username</label>
          <input type="text" ref="userName" placeholder="User name" className="formField" /><br></br>
          <label>Email</label>
          <input type="text" ref="email" placeholder="email" className="formField" /><br></br>
            <label>status</label>
                 <select name="status" ref="status"   >
                          <option value = "Active" >Active</option>
                          <option value="Inactive">Inactive</option>

                      </select><br/> 
          
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i}.Name {data.name} <br></br>,
               UserName {data.userName}<br></br>,
               Email {data.email} <br></br>,
              Status   {data.status} <br></br>
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
        
      </div>
      // datas the array which is present in this.state aru tw map lagako ani i refers to index tyo save vako data ko index denote garxa tyo kati bela use hunxa vanda edit rw remove huda
      //li use garexu timle table use gara 
      
    );
  }
}

export default Edit;