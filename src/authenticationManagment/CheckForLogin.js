import React from 'react';
import { Redirect } from 'react-router';
import { dataExistInSession } from './../sessionManagment/session.js';


const CheckForLogin = ({ children }) => {

    if (!dataExistInSession("ncode") ||   !dataExistInSession("id_token")) {

        return <Redirect to="/login"></Redirect>
    }




    return  <React.Fragment>
                 {children}
            </React.Fragment>




};



export default CheckForLogin;