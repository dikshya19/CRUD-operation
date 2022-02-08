import React, { Component, Fragment } from 'react'
import { Form, FormField, TextBox, CheckBox, ComboBox, LinkButton } from 'rc-easyui';
import '../App.css'
export default class Valid extends Component {


    constructor() {
        super();
        this.state = {
          user: {
            name: null,
            email: null,
            hero: null,
            accept: true
          },
        //   heroes: [
        //     { value: 11, text: "Mr. Nice" },
        //     { value: 12, text: "Narco" },
        //     { value: 13, text: "Bombasto" },
        //     { value: 14, text: "Celeritas" },
        //     { value: 15, text: "Magneta" },
        //     { value: 16, text: "RubberMan" },
        //     { value: 17, text: "Dynama" },
        //     { value: 18, text: "Dr IQ" },
        //     { value: 19, text: "Magma" },
        //     { value: 20, text: "Tornado" }
        //   ]
        }
      }
      handleChange(name, value) {
        let user = Object.assign({}, this.state.user);
        user[name] = value;
        this.setState({ user: user })
      }
      // async handleSubmit() {
      //   // let token = getCookie("erp_access_token");
      //   // let tokenType = getCookie("erp_token_type");
      //   // let form = Object.assign({}, this.props.formFields);
      //   var form = this.props.formFields;
      //   let apiUrl = `${API_URL}api/https://jsonplaceholder.typicode.com/users`;
      //   let headersConfig = {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `${tokenType} ${token}`,
      //     },
      //   };
    
      //   this.props.innerRef.current.validate(async (errors) => {
      //     if (isEmpty(errors)) {
      //       //No Form Validation Error
      //       if (token != null) {
      //         //Access Token Available
      //         this.setState({
      //           isLoading: true,
      //         });
    
      //         axios
      //           .post(apiUrl, form, headersConfig)
    
      //           .then((response) => {
    
      //             if (response.status === 200) {
      //               this.setState({
      //                 isLoading: false,
      //               });
      //               if (response.data.status) {
      //                 this.messager.alert({
      //                   title: "Success",
      //                   msg: response.data.message,
      //                   icon: "info",
      //                   reload: true,
      //                   buttons: [
      //                     {
      //                       text: "ok",
      //                       onClick: () => {
      //                         window.location.reload();
      //                       },
      //                     },
      //                   ],
      //                 });
      //                 autoDissaperAction();
      //               } else {
      //                 this.messager.alert({
      //                   title: "Error",
      //                   icon: "error",
      //                   msg: response.data.message,
      //                 });
      //               }
      //             } else {
      //               this.messager.alert({
      //                 title: "Error",
      //                 icon: "error",
      //                 msg: "Uncaught Error",
      //                 reload: false,
      //               });
      //             }
      //           })
      //           .catch((error) => {
      //             this.setState({
      //               isLoading: false,
      //             });
      //             // this.messager.alert({
      //             //   title: "Error",
      //             //   icon: "error",
      //             //   msg: "Internal Server Error",
      //             //   reload: false,
      //             // });
      //             var response = error["response"];
      //             if (response !== undefined) {
      //               if (response.status === 403) {
      //                 var message = "";
      //                 response.data.errors.forEach((row, i) => {
      //                   message +=
      //                     "<p style='margin-bottom:3px;'>" +
      //                     row.defaultMessage +
      //                     "</p>";
      //                 });
    
      //                 this.messager.alert({
      //                   title: "Error",
      //                   icon: "error",
      //                   msg: message,
      //                   reload: false,
      //                 }); // Backend Validation Error ie.403
      //               } else {
      //                 this.messager.alert({
      //                   title: "Error",
      //                   icon: "error",
      //                   msg: "UnCaught Error",
      //                   reload: false,
      //                 }); // Uncaught Backend Error ie.500 eyc.
      //               }
      //             } else {
      //               this.messager.alert({
      //                 title: "Error",
      //                 icon: "error",
      //                 msg: "Internal Server Error",
      //                 reload: false,
      //               }); // Caused due to syntax error in front end
      //             }
      //           });
      //       } else {
      //         //Access Token Expired.
      //         //Generate new Access Token using Refresh Token.
      //         const resp = await getAccessToken();
      //         if (resp) {
      //           this.handleSubmit();
      //         }
      //       }
      //     } else {
      //       // alert("Front End Form Validaion ");
      //       this.messager.alert({
      //         title: "Error",
      //         icon: "error",
      //         msg: "Front End Form Validaion ",
      //         reload: false,
      //       });
      //     }
      //   });
      // }
      render() {
        const { user, heroes } = this.state;
        return (
            <div>
          <div>
            <h2>Basic Form</h2>
            <Form
              style={{ maxWidth: 500 }}
              model={user}
              labelWidth={120}
              labelAlign="right"
              // onChange={this.handleChange.bind(this)}
            >
              <FormField name="name" label="Name:">
                <TextBox></TextBox>
              </FormField>
              <FormField name="email" label="Email:">
                <TextBox></TextBox>
              </FormField>
              {/* <FormField name="hero" label="Select a hero:">
                <ComboBox data={heroes}></ComboBox>
              </FormField> */}
              {/* <FormField name="accept" label="Accept Me:">
                <CheckBox checked={user.accept}></CheckBox>
              </FormField> */}
              {/* <FormField style={{ marginLeft: 120 }}>
                <LinkButton onClick={this.handleSubmit.bind(this)}>Submit</LinkButton>
              </FormField> */}
            </Form>
            <p>{JSON.stringify(user)}</p>
          </div>

<Fragment>
            
<div>
            <h2> Form 2</h2>
            <Form
              style={{ maxWidth: 500 }}
              model={user}
              labelWidth={120}
              labelAlign="right"
              onChange={this.handleChange.bind(this)}
            >
              <FormField name="name" label="Name:">
                <TextBox></TextBox>
              </FormField>
              <FormField name="email" label="Email:">
                <TextBox></TextBox>
              </FormField>
              {/* <FormField name="hero" label="Select a hero:">
                <ComboBox data={heroes}></ComboBox>
              </FormField> */}
              {/* <FormField name="accept" label="Accept Me:">
                <CheckBox checked={user.accept}></CheckBox>
              </FormField> */}
              <FormField style={{ marginLeft: 120 }}>
                <LinkButton onClick={this.handleSubmit.bind(this)}>Submit</LinkButton>
              </FormField>
            </Form>
            <p>{JSON.stringify(user)}</p>
          </div> 


</Fragment>
          </div>

        );
      }
    }
