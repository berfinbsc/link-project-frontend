import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import axios from 'axios';


const Requests = () => {


  const {link}= useParams()
const [pagebsc,setPage]= useState("");

useEffect (()=>{
axios.get(`https://zetacoder.rocks/darvinapi/darvinberfin/${link}`)
.then(response=>{
  setPage(response.data);
  console.log(response.data);
})
.catch(error=>{
  console.log(error);
});


},[link])


  return (
    <div>
      <p>

linkinz : {pagebsc.longlink}

      </p>

    </div>
  )

  }
export default Requests;