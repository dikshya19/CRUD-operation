// import React from 'react';
// import { Form, FormField, TextBox, CheckBox, ComboBox, LinkButton } from 'rc-easyui';
 
// class Create extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       user: {
//         act:0,
//         index:'',
//         name: null,
//         userName:"",
//         email: null,
//         status: null,
//         accept: true
        
//       },
//       datas:[],
//       rules: {
//         name: ["required", "length[5,10]"],
//         email: "email",
//         hero: "required"
//       },
//      status: [
//         { value: 11, text: "Active" },
//         { value: 12, text: "Inactive" },
        
//       ]
//     }
//   }

//   // componentDidMount(){
//   //   this.refs.name.focus();
//   // }

//   fSubmit = (e) =>{
//     e.preventDefault();
//     console.log('try');

//     let datas = this.state.datas;
//     // let name = this.refs.name.value;
//     // let address = this.refs.address.value;

//     // if(this.state.act === 0){   //new
//     //   let data = {
//     //     name, address
//     //   }
//     //   datas.push(data);
//     // }else{                      //update
//     //   let index = this.state.index;
//     //   // datas[index].name = name;
//     //   // datas[index].address = address;
//     // }    

//     this.setState({
//       datas: datas,
//       act: 0
//     });

//     // this.refs.myForm.reset();
//     // this.refs.name.focus();
//   }
 
//   fRemove = (i) => {
//     let datas = this.state.datas;
//     datas.splice(i,1);
//     this.setState({
//       datas: datas
//     });

//     // this.refs.myForm.reset();
//     // this.refs.name.focus();
//   }

//   fEdit = (i) => {
//     let data = this.state.datas[i];
//     // this.refs.name.value = data.name;
//     // this.refs.address.value = data.address;

//     this.setState({
//       act: 1,
//       index: i
//     });

//     // this.refs.name.focus();
//   } 
//   handleChange(name, value) {
//     let user = Object.assign({}, this.state.user);
//     user[name] = value;
//     this.setState({ user: user })
//   }
//   handleSubmit() {
//     this.form.validate(errors => {
//       // ...
//     })
//   }
//   render() {
//     const { user, rules, status } = this.state;
    
//     return (
//       <div>
//         <h2>Create</h2>
//         <Form
//           ref={ref => this.form = ref}
//           style={{ maxWidth: 500 }}
//           model={user}
//           rules={rules}
//           labelWidth={120}
//           labelAlign="right"
//           errorType="tooltip"
//           onChange={this.handleChange.bind(this)}
//         >
//           <FormField name="name" label="Name:">
//             <TextBox></TextBox>
//           </FormField>
//           <FormField name=" userName" label=" User Name:">
//             <TextBox></TextBox>
//           </FormField>
//           <FormField name="email" label="Email:">
//             <TextBox></TextBox>
//           </FormField>
//           <FormField name="status" label="Status:">
//             <ComboBox data={status}></ComboBox>
//           </FormField>
          
//           <FormField style={{ marginLeft: 120 }}>
//             <LinkButton onClick={(e)=>this.fSubmit(e)}>Submit</LinkButton>
//           </FormField>
//         </Form>
//         {/* <p>{JSON.stringify(user)}</p> */}
//       </div>

      
//     );
//   }
// }
 
// export default Create;
