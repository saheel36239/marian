import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setName]=useState("Saheel")
    var[a,setA]=useState()

    const inputHandler=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }

    const submitHandler=()=>{
        setA(name)
        
    }
  return (
    <div>
        <h1>welcome {a} </h1>
        <TextField label="enter your name" onChange={inputHandler}/><br /><br />
        <Button variant='contained' onClick={submitHandler}>add name </Button>

    </div>
  )
}

export default StateBasics