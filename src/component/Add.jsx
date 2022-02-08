import React ,{useState}from 'react';
import Create from './Create';
import View from './View';



export default function Add() {

    const[data,setData]=useState({
        name:"",
        username:"",
        email:"",
        status:""
    });

    const[records,setRecords] = useState([]);

   const handleInput=(e)=>{
       const name =  e.target.name;
       const value = e.target.value;
       console.log(name,value);
       setData({ ...data, [name]:value})
    
   }
    const handleSubmit=(e)=>{
        e.preventDefault();

     const newRecords = {...data, id:new Date().getTime().toString()}
     setRecords([...records,newRecords]);

     setData({name:"",username:"",email:"",status:""});
    }


    const handleEdit=(index)=>{
        let data = this.state.datas[index];
    
        this.setState({
            act: 1,
            // index: i
          });
    
       }

    return (
      <>  
            <Create
               handleInput={handleInput}
               handleSubmit={handleSubmit}
               data={data}
               setData={setData}
               records={records}
               setRecords={setRecords}
               />
            <View
              records={records}
              setRecords={setRecords}
              data={data}
              setData={setData}
              handleEdit={handleEdit}
              />
        </>
        
    )
}
