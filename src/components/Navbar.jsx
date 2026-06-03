import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <AppBar>
            <Toolbar>
                <h3>Myapp</h3>&nbsp
                 <Link to="/login">
                 <Button variant='contained' color="secondary">Login</Button>
                 </Link>&nbsp;&nbsp;

                 <Link to="/">
                <Button variant="contained" color="secondary">Signup</Button> &nbsp;&nbsp;
                </Link>&nbsp;&nbsp;

                <Link to="/State">
                 <Button variant='contained' color="secondary">State</Button>
                 </Link>&nbsp;&nbsp;

                 <Link to="/Count">
                 <Button variant='contained' color="secondary">Count</Button>
                 </Link>&nbsp;&nbsp;

                 <Link to="/Name">
                 <Button variant='contained' color="secondary">Name</Button>
                 </Link>&nbsp;&nbsp;

                 <Link to="/Api">
                 <Button variant='contained' color="secondary">Api</Button>
                 </Link>&nbsp;&nbsp;

                 <Link to="/Product">
                 <Button variant='contained' color="secondary">Product</Button>
                 </Link>&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
        <br /><br /><br /><br /> 
            
    </div>
  )
}

export default Navbar