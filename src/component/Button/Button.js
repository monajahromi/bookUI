
import React from 'react';
import { string, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button as MaterialButon } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';


const useStyles = makeStyles((theme) => ({
   
    button: {
        backgroundColor : '#e150ac',
        color :'white',
        top: '1px' ,
        lineHeight:' 1.95',
        maxWidth : '120px'

    
    }
}))



const Button = ( {title, onClick , type , ...props }) => {

    const classes = useStyles();
    
    return (
       
         <MaterialButon onClick={onClick} className ={classes.button} fullWidth  type ={type} {...props}> {title}</MaterialButon>  
    )

}


export default Button;