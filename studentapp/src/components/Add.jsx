import { Button, TextField } from '@mui/material'
import React from 'react'

const add = () => {
  return (
    <div>
        <h3>Add</h3>
         <TextField label="Name" variant = 'outlined'/><br/><br />
         <TextField label="Age" variant = 'outlined'/><br/><br />
         <TextField label="Deptid" variant = 'outlined'/><br/><br />
          <TextField label="Mark" variant = 'outlined'/><br/>
          <Button variant="contained">Contained</Button>
    </div>
  )
}

export default add