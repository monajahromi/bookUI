 import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField} from "@material-ui/core";
import Button from './../../component/Button/Button.js'

const useStyles = makeStyles((theme) => ({
   
    title :{
        fontSize: '2.5rem',
        fontWeight: '300',
    },
 
}))

const SearchPanel = ({setSearchTerm}) => {
    const classes = useStyles();
 ///   const [searchValue, setSearchValue] = useState() ; 
    


    const onSeachClick =(event)=>{
        event.preventDefault()
       // console.log('Done : ' , searchValue)
    }

    return (
        <Grid container  direction="column" className ="section"> 
        <form  onSubmit ={onSeachClick}>

            
            <Grid lg={12}  item className={classes.title}> 
             Find the book
            </Grid>
            
            <Grid lg={12} container item   direction="row" alignItems ="center"> 
            <Grid item style={{flexGrow : 1}} lg ={11}>
                <TextField  label="Outlined" margin="dense" variant="outlined" fullWidth onChange ={(event)=> setSearchTerm(event.target.value)} />
            </Grid>

            <Grid item lg ={1} style={{paddingLeft : '5px' ,textAlign :'right'}} xs="12">
               
                <Button type="submit" title="SEARCH" onClick = {onSeachClick}></Button> 
            </Grid>
             
             
            
           
           
            
            </Grid>
        </form>
        </Grid>
    );
};

export default SearchPanel;