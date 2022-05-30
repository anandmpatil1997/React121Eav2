import React from "react";
import { useState } from "react";
import "./PageOne.css"
const RegisterPageOne=()=>{
    const [enterName,setEneterName]=useState("");
    const [enterEamil,setEnterEmail]=useState("");
    const nameHandler=(event)=>{
        setEneterName(event.targe.value)
    }
    const EmailHandler=(event)=>{
        setEnterEmail(event.targe.value)
    }
    // const submitHandler=(event)=>{
    //     event.preventDefault();
    //     const expenceData={
    //         name:enterName,
    //         amount:enterEamil,
            
     
    //     };
    return(
    <div className="container">
       <div className="mainform">
       
       <form  className="mainf" >
            <label>Name</label>
            <input type="text" onChange={nameHandler}/>
            <br/>
            <label >Email</label>
            <input type="email" onChange={EmailHandler}/>
            <br/>
            <button className="btn">Next</button>
        </form>
       </div>
    </div>
    )
}
export default RegisterPageOne