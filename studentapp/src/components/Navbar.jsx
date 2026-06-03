import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>studentapp</h3>
                <Link to="/Add">
                 <Button variant='contained' color="secondary">Add</Button>
                 </Link>&nbsp;&nbsp;

              <Link to="/View">
                 <Button variant='contained' color="secondary">View</Button>
                 </Link>&nbsp;&nbsp;   
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar