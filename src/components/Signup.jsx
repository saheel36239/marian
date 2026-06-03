import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h3>Signup page</h3>
        <TextField label="Name" variant = 'outlined'/><br/><br />
         <TextField label="Age" variant = 'outlined'/><br/><br />
         <TextField label="City" variant = 'outlined'/><br/><br />
          <TextField label="Password" variant = 'outlined'/><br/>
          <Button variant="contained">Contained</Button>
    </div>
  )
}

export default Signup