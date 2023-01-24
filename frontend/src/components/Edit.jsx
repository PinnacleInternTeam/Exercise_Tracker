import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'



export default function Edit() {
  const[username,setUser]=useState("")
  const[description,setDesp]=useState("")
  const[duration,setDuration]=useState("")
  const[date,setDate]=useState("")

  let id=useParams();
  let key=id.edit.slice(4)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8080/exercises/${key}`)
    .then((res)=>{
      console.log(res.data)
      setUser(res.data.username)
      setDesp(res.data.description)
      setDuration(res.data.duration)
      setDate(res.data.date)
    })
  
    
  }, [])

  const updateuser=()=>{
    axios.post(`http://127.0.0.1:8080/exercises/update/${key}`, {
      "username": username,
       "description": description,
       "duration": duration,
       "date": date
      
    })
    .then((res)=>{
      console.log(res.data)})
      alert('success')
      .catch(()=>alert('error'))

  }
  

  return (
    <div>
        <form>
        <div className='container-fluid '>
          <div><h1>Edit Exercise Log</h1></div>
            <div>
             
                <label>UserName</label><br></br>
                <input type="text" className='form-control' defaultValue={username}  onChange={(e)=>setUser(e.target.value)} ></input>

            </div>
            <div>
              <label>  Description</label>
              <input type="text" className='form-control' defaultValue={description} onChange={(e)=>setDesp(e.target.value)}></input>
            </div>
            <div>
            <label>  Duration(in minutes)</label>
              <input type="text" className='form-control' defaultValue={duration}  onChange={(e)=>setDuration(e.target.value)}></input> 
            </div>
            <div>
            <label>  Date</label>
              <input type="date" className='form-control' onChange={(e)=>setDate(e.target.value)}></input>
            </div>
            <div>
           
             <button type='button' className='mt-3 btn' onClick={updateuser}  >Edit Exercise Log </button>
            </div>
        </div>


        
        </form>
      

    </div>
  )
}
