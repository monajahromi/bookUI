import { IconButton } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import React from 'react';

const Logout  =  () =>{
  
 
   const logout= ()=>{
    
    sessionStorage.clear();
    window.location.href = './';
   } 

   


    return (
        
        <IconButton onClick ={logout}>
                <PowerSettingsNewIcon/>
        </IconButton>
        
    )  

}

export default Logout;