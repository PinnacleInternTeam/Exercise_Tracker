import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link} from 'react-router-dom'




export default function List() {
   
   const [exercise, setExercise] = useState([])
   const[refresh,setRefresh]=useState(true)
 
   useEffect(() => {
      axios.get('http://127.0.0.1:8080/exercises')
         .then((res) => { 
            console.log(res.data)
         setExercise(res.data)
         


         }

         )

   }, [refresh])

const del=(e)=>{
      axios.delete(`http://127.0.0.1:8080/exercises/${e.target.value}`)
      .then((res)=>{
         alert('Deleted')
      })
      // .then((res) => { 
      //    console.log(res.data)
      //    alert('success')
      // }

      console.log(e.target.value)
      setRefresh(!refresh)
      
   }
   
 

   return (
      <div>
            <div className="container mt-5" >

            <div className='row'>
            <div className="col h3">Name</div>
            <div className="col  h3">Description</div>
            <div className="col  h3">Duration</div>
            <div className="col  h3">Date</div>
            <div className="col  h3">Edit</div>
            <div className="col  h3">Delete</div>
            </div>
         
         
         {
            
            
            
            exercise.map((i,index)=>{
               return(
                  
                 <div className="row"  key={index}>
                  <div className="col"> {i.username} </div>
                  <div className="col">{i.description}</div>
                  <div  className="col">{i.duration}</div>
                  <div className="col">{i.date}</div>
                <button type="button" className="col btnr  m-2 " ><Link to={'/Edit'+i._id}>Edit</Link></button>
                  <button type="button" className=' btnr col m-2' onClick={del} value={i._id}>Delete</button>

           
               
          
                 
                 </div> 
                  

               )
               
            })
         }
         </div>

            </div>
   )
}

