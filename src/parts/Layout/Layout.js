import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CheckForLogin from './../../authenticationManagment/CheckForLogin.js';
import Header from './../Header/Header.js';





const useStyles = makeStyles((theme) => ({
    topRoundedContainer: {

        backgroundColor: '#caf3ff',
        padding :'3rem 1rem 0 1rem',
        minHeight: 'calc(100vh - 80px)',
     
    },
    container: {

        maxWidth: '1344px',
        margin: '0 auto',
        justifyContent: 'center',
        display: 'flex',
        alignItems :'center',
        flexDirection : 'column'

    },
    bottoms :{
        position : 'fixed',
        bottom : 0,
        zIndex :1,
    }
}))



const Layout = ({ children  ,routeAccessability}) => {


    const classes = useStyles();



    return (




<>
 
            <CheckForLogin routeAccessability = {routeAccessability}>



                <Header></Header>


                <section className={classes.topRoundedContainer}>

                    <div className={classes.container}>
                        {children}
                    </div>
                    
                </section>
            </CheckForLogin>    
 
            
 
</>



    );
};

export default Layout;