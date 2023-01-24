import React from 'react'
import { useState } from 'react'
import '../css/mycss.css' 
import axios from 'axios';

export default function Create() {
    const[uname,setUser]=useState(" ")
    const adduser=()=>{
        axios.post("http://127.0.0.1:8080/user/add",
        {
            username:uname,
        })
        .then((res)=>{
         alert('success')
        })
        .catch(()=>alert('error'))
      }
       
  return (
    <div>
        <form>
            <div className='container'>
                <div>
                <label>UserName</label><br></br>
                <input type="text" className='form-control' onChange={(e)=>setUser(e.target.value)}></input>
                </div>
                <div>
           
             <button type='button' className='mt-3 btn' onClick={adduser}>Create Exercise Log </button>
            </div>
            </div>
        </form>



    </div>
  )
}
