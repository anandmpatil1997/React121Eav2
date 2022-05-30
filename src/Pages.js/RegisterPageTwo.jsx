import React from "react";
import "./PageOne.css"
const RegisterPageTwo=()=>{
    return(
    <div className="container">
       <div className="mainform">
       
       <form  className="mainf">
            <label>Adress</label>
            <input type="text"/>
            <br/>
            <label >Phone</label>
            <input type="number"/>
            <br/>
            <button className="btn">Next</button>
        </form>
       </div>
    </div>
    )
}
export default RegisterPageTwo