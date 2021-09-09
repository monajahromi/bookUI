import React from 'react';

export const dataExistInSession =(name) =>{
  
    if (!sessionStorage.getItem(name)){
        return false ; 
    }
    

    return true
}

export  const getDataFromSession = (name)=>{

 
  
    return  dataExistInSession (name) ? JSON.parse(sessionStorage.getItem(name))  : ""
   
    
}

export  const setDataToSession = (name , value)=>{

     sessionStorage.setItem(name ,JSON.stringify( value) ) ; 
 }


 