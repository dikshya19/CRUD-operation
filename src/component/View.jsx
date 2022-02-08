import React from 'react';
import { DataGrid, GridColumn } from 'rc-easyui';
 
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      act: 0,
      name:"",
      userName:"",
      email:"",
      status:"",
      index: '',
      datas: []
    }
  }
  
  render() {
    let datas = this.state.datas;
    return (
      <div>
        <h2>View</h2>

        {/* {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.address} */}
              <DataGrid data={this.state.data} style={{height:250}}>
          <GridColumn  value={this.state.name} field="name" title="Name"></GridColumn>
          <GridColumn value={this.state.userName} field="userName" title="userName"></GridColumn>
          <GridColumn value={this.state.email} field="email" title="Email" align="right"></GridColumn>
          <GridColumn  value ={this.state.status}field="status" title="Status" align="right"></GridColumn>
          {/* <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
          <GridColumn field="status" title="Status" align="center"></GridColumn> */}
        </DataGrid>
              {/* <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button> */}
            {/* </li> */}
          {/* // )} */}
       
      </div>
    );
  }
}
 
export default View;