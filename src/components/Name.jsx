import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var[a,seta]=useState()
 var inpt1=()=>{
        seta("React")
    }

    var inpt2=()=>{
        seta("Java")
    }
     var inpt3=()=>{
        seta("Python")
    }
    useEffect(()=>{
        inpt2()
    },[])
  return (
    <div>
        <h1>WELCOME {a} </h1>
    <Button variant='contained' color ='success' onClick={inpt1}>REACT</Button> &nbsp;&nbsp;
    <Button variant='contained' color ='warning' onClick={inpt2}>JAVA</Button>  &nbsp;&nbsp;
    <Button variant='contained' color ='error' onClick={inpt3}>PYTHON</Button> 
    </div>
  )
}

export default Name