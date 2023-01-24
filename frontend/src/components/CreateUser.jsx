import React from 'react'
import { useState } from 'react'
import '../css/mycss.css' 
import axios from 'axios';


export default function Edit() {
  const[uname,setUser]=useState(" ")
  const[desp,setDesp]=useState(" ")
  const[duration,setDuration]=useState(" ")
  const[date,setDate]=useState(" ")


  const adduser=()=>{
    axios.post("http://127.0.0.1:8080/exercises/add",
    {
      username:uname,
      description:desp,
      duration:duration,
      date:date
    })
    .then((res)=>{
     alert('success')
    })
    .catch(()=>alert('error'))
  }
   
  
  

  return (
    <div>
        <form>
        <div className='container-fluid '>
          <div><h1>Create Exercise Log</h1></div>
            <div>
                <label>UserName</label><br></br>
                <input type="text" className='form-control' onChange={(e)=>setUser(e.target.value)}></input>

            </div>
            <div>
              <label>  Description</label>
              <input type="text" className='form-control' onChange={(e)=>setDesp(e.target.value)}></input>
            </div>
            <div>
            <label>  Duration(in minutes)</label>
              <input type="text" className='form-control' onChange={(e)=>setDuration(e.target.value)}></input> 
            </div>
            <div>
            <label>  Date</label>
              <input type="date" className='form-control' onChange={(e)=>setDate(e.target.value)}></input>
            </div>
            <div>
           
             <button type='button' className='mt-3 btn' onClick={adduser}>Create Exercise Log </button>
            </div>
        </div>


        
        </form>
      
        

    </div>
  )
}
