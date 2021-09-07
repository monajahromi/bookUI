import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField} from "@material-ui/core";
import Button from './../../component/Button/Button.js';

const useStyles = makeStyles((theme) => ({
    label: {
        fontWeight: 'bold',
        color :'gary',
        paddingRight : '20px'
  
    },
    value: {
        color :'black'
        
    },
    row:{

    }
  }))

  

const BookDetail = ()=>{
    const classes = useStyles();


    return (
        <Grid container  direction="column" className ="section"> 
        <div className = {classes.row}>
            <span  className = {classes.label} >
            title 
            </span>
            <span className = {classes.value} >
            Practical MongoDB
            </span>
            
        </div>

        <div className = {classes.row}>
            <span  className = {classes.label} >
            subtitle 
            </span>
            <span className = {classes.value} >
            Architecting, Developing, and Administering MongoDB
            </span>
            
        </div>

        <div className = {classes.row}>
            <span  className = {classes.label} >
            isbn13 
            </span>
            <span className = {classes.value} >
            9781484206485
            </span>
            
        </div>

        <div className = {classes.row}>
            <span  className = {classes.label} >
            price 
            </span>
            <span className = {classes.value} >
            3522
            </span>
            
        </div>


      
        </Grid>
    )
}




export default BookDetail