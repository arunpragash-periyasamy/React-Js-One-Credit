import React from 'react';
import Header from './asserts/coffeeshop.jpg'
import Logo from './asserts/logo.png'
import './lab1.css'
const Lab1 = () => {
    const handleClick =()=>{
        var a=window.confirm("Are you want to Confirm Your Coffee");
        if(a===true){
            alert("Have a Better day with your Coffee : )");
        }
        else{
            alert("Coffee will make your day better . Just try it : )")
        }
    }
    return (
        <>
        <header>
            <span><img src={Logo} style={{width:"80px" ,height:"70px"}} alt="logo"/><h1>&nbsp;&nbsp;Welcome to cofee shop</h1></span>
        </header>
        <img src={Header} style={{width: "100%",height:"800px"}} alt="Hello"/>
        <center><h2>Here You Can Buy a Coffee </h2> <button type="button" onClick={()=>handleClick()}>Buy a Coffee</button>
        <h2>Good ideas starts with Brainstroming ,GREAT IDEAS STARTS WITH A COFFEE</h2>
        </center>
        <br/>
        <br/>
        <br/>
        </>
    );
}

export default Lab1;