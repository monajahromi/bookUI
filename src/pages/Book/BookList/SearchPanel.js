 import { Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
   
    title :{
        fontSize: '1.5rem !important',
        fontWeight: '500',
    },
 
}))

const SearchPanel = ({setSearchTerm}) => {
    const classes = useStyles();

    const onSeachClick =(event)=>{
        event.preventDefault()
       
    }

    return (
        <Grid container  direction="column" className ="section"> 
        <form  onSubmit ={onSeachClick}>

            
            <Grid lg={12}  item> 
            
            <Typography color="secondary"  className={classes.title}>
                SEARCH BOOK 
            </Typography>    
             
            </Grid>
            
            <Grid lg={12} container item   direction="row" alignItems ="center"> 
            <Grid item style={{flexGrow : 1}} lg ={12}>
                <TextField  label="Search by title, author or category"
                 margin="dense" variant="outlined" fullWidth onChange ={(event)=> setSearchTerm(event.target.value)} />
            </Grid>

             
             
            
           
           
            
            </Grid>
        </form>
        </Grid>
    );
};

export default SearchPanel;