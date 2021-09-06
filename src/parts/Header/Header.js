import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import logo from './../../asset/images/logo.png';
import Logout from './../../authenticationManagment/Logout.js';
import {dataExistInSession} from './../../sessionManagment/session.js'

const useStyles = makeStyles((theme) => ({
    header :{
        padding: '.5rem',
        margin:' 0 auto',
        width: 'auto',
        maxWidth : '1344px',
        lineHeight: '1.5',
        display :'flex' , 
        alignItems :'center',
        height: '80px'

    },
   
}))
const Header = () => {
    const classes = useStyles();
    return (
        <div>
            
                <header className = {classes.header}>
                    
                    <p style={{flexGrow :1}}>
                        <img src={logo} alt="BookStore"/>

                    </p>

                   {dataExistInSession('tocken') &&
                   <Logout/>
                   } 
                    
                
                
                        
                    
                </header>
        </div>
    );
};

export default Header;