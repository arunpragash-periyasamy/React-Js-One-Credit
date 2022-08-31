import React,{useState} from "react";


export const Functional = () =>{
    const [count,setCount]=useState(1);
    const [name,setName]=useState("");
    const [tempName,setTempName]=useState("");
    const handleClick =() =>{
        setCount(count+1);
    }
    const handleClickRemove = () =>{
        if(count>1){
            setCount(count-1);
        }
    }
    const displayName =() =>{
        setTempName(name);
    }
    return(
    <div>
        <br/>
        <br/>
        <button onClick={()=>handleClick()}> + </button>  <br/>
        <h1>Welcome: {count}</h1><br/>
        <button onClick={()=>handleClickRemove()}>-</button><br/>
        <input onChange={(d) => setName(d.target.value)} type="text" /><br/>
        <button onClick={()=>displayName()}>Submit</button>
        <h1 id="Hello">name: {tempName} </h1> 
        {/* in the above line we can change tempName to name to see the result while the user type the value to the input field */}
    </div>
    )
}
