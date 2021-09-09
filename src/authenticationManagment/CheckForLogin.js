import React from 'react';
import { Redirect } from 'react-router';
import { dataExistInSession } from './../sessionManagment/session.js';

export const isLoggedIn = ()=>{
   return  dataExistInSession("ncode") &&  dataExistInSession("id_token")
}

const CheckForLogin = ({ children , routeAccessability }) => {


 
    
    
      if (routeAccessability === "private" && !isLoggedIn() )
            return <Redirect to="/login"></Redirect>



    return  <React.Fragment>
                 {children}
            </React.Fragment>




};



export default CheckForLogin;