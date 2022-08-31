import React , {useEffect,useState} from 'react'
import axios from "axios";

const PropsValue=({value})=>{
    const[name,setName] = useState('')
    const[number,setNumber] = useState(0)
    const[data,setData] = useState([])


    // React Hooks
    // useEffect  Syntax;
    useEffect(() => {
        if(name.length){
            console.log('Welcome Use Effect - Name Rendered');
        }
        if(number.length){
            console.log('Welcome Use Effect - Number Rendered inside the name useeffect');
        }
    } ,[name,number]
    )

    useEffect(() => {
        if(number.length){
            console.log('Welcome Use Effect - Number Rendered');
        }
    } ,[number]
    )

    const getData = () =>{
        axios
            .get("https://randomuser.me/api")
            .then(function (response){
                console.log("Data Retrived from the link")
                console.log(response);
                console.log("Data Retrived from Data object alone")
                console.log(response.data.results);
                setData(response.data.results)
            })
    }
    
    return(
        <div>
        <h1>Props Value is {value}</h1>
      <input type="text" name="" placeholder="name" onChange={(e)=>setName(e.target.value)} /><br/>
      <input type="text" name="" placeholder="number" onChange={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>getData()}>Get Data</button>
      
      {data && data.map(item => 
      <>
        <li>Gender : {item.gender}</li><br/>
        <li>Name</li>
        <ul>
            <li>title : {item.name.title}</li>
            <li>First Name : {item.name.first}</li>
            <li>Last Name : {item.name.last}</li>
            <li>Location : {item.location.city}</li>
            <li>Country : {item.location.country}</li>
        </ul>
        </>)
      }
      
      
      </div>

    );
}

export default PropsValue;