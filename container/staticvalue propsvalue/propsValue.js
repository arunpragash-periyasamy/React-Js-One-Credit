import React , {useState} from 'react'
import axios from "axios";
import './propsValue.css'

const PropsValue=({value})=>{
    const[data,setData] = useState([])



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
        <div className="props_value">
      <center><button onClick={()=>getData()}>Get Data</button>
      
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
      
      </center>
      </div>

    );
}

export default PropsValue;