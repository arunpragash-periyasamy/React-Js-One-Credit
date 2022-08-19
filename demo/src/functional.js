import React,{useState} from "react";


export const Functional = () =>{
    const [count,setCount]=useState(1);
    const [name,setName]=useState("");
    const handleClick =() =>{
        setCount(count+1);
    }
    const handleClickRemove = () =>{
        if(count>1){
            setCount(count-1);
        }
    }
    const displayName =() =>{
        document.getElementById("Hello").innerHTML("Hello");
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
        <h1 id="Hello">name: {name} </h1>
    </div>
    )
}
