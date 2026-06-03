import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

const Product = () => {
     const[product,setproduct]=useState([])
    axios.get("https://fakestoreapi.com/products") 
    .then((res)=>{
       setproduct(res.data)
       console.log(product) 
    })
  return (
    <div>
        <Grid container spacing={2}>
        {product.map((Val)=>{
            return(



      
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Val.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {Val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      
    </Card>
    
          )
        })}
</Grid>
    </div>
  )
}

export default Product