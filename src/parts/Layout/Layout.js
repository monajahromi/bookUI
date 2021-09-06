import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import CheckForLogin from './../../authenticationManagment/CheckForLogin.js';
import Header from './../Header/Header.js'
import bottoms from './../../asset/images/bottoms.png'
import jet from './../../asset/images/jet.png'




const useStyles = makeStyles((theme) => ({
    topRoundedContainer: {

        backgroundColor: '#caf3ff',
        padding :'3rem 1rem 0 1rem',
        minHeight: 'calc(100vh - 80px)',
        backgroundImage : `url('${bottoms}') , url('${jet}')`,
        //"url('`${bottoms}`') , url('http://localhost:3000/financial/static/media/jet.png')",
     
        backgroundPositionX: 'left , calc(100% - 30px)',
        backgroundPositionY: 'bottom , 70px ',
        backgroundRepeat: 'no-repeat , no-repeat',
        // paddingBottom : '.5rem',
        // paddingTop : '.5rem',
        // margin:' 0 auto',
        // width: 'auto',
        // maxWidth : '1344px',
        // lineHeight: '1.5',
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



const Layout = ({ children }) => {


    const classes = useStyles();



    return (




<>
 
            



                <Header></Header>


                <section className={classes.topRoundedContainer}>

                    <div className={classes.container}>
                        {children}
                    </div>
                    
                </section>
                
             {/* <img src={bottoms} alt="bottoms" className ={classes.bottoms}/>  */}

             {/* <img src={bottoms} alt="bottoms" className ={classes.bottoms}/>  */}
            
 
</>



    );
};

export default Layout;