import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { default as React, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { setDataToSession } from '../sessionManagment/session.js';
import logo from './../asset/images/logo.png';
import Button from './../component/Button/Button.js';
import {isLoggedIn} from './CheckForLogin.js'



const useStyles = makeStyles((theme) => ({
    loginPanel: {
        padding: '5rem 1.5rem !important' ,

    },
    loginItem:{
        marginBottom :'5px'
    },
    title:{
        fontSize:' 0.85rem',
        marginBottom: ' 3rem',
        display :'flex',
        flexDirection : 'column',
        justifyContent :'center',
        alignItems :'center',
    }

}))

const Login = () => {
    const classes = useStyles();
    const [loginValue, setLoginValue] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const [loggedin, setLoggedin] = useState(false);
    const [isLoading , setIsLoading] = useState() ; 
    const [message, setMessage] = useState();

  
    useEffect(()=>{
        if (isLoggedIn())
            setLoggedin(true);
        
        
   },[])
    

    const onLoginClick = (event) => {
       
        setIsLoading(true)

        setTimeout(()=>{
            
            
            setDataToSession('ncode', loginValue)
            setDataToSession('id_token','tocken from authentication ws' ) ; 
            setIsLoading(false)
            setLoggedin(true)



        },1000)
        
       
    }


    return (
        <>
            {loggedin && <Redirect to="/"></Redirect>}
            <Grid container  direction="column" lg={4} md={5} xs={12} className={`${classes.loginPanel} section`} alignItems ="center">



                <Grid lg={12} item className={classes.title}>
                <img src={logo} alt="BookStore"/>
                  Enter your username and passwrod to log on:
                </Grid>

                <Grid lg={12} container item direction="column" >
                    <form onSubmit={onLoginClick}>
                        <Grid item className={classes.loginItem}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                required
                                fullWidth
                                id="loginValue"
                                label="Username"
                                name="loginValue"
                                onChange={e => setLoginValue(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item className={classes.loginItem}>
                            <TextField
                                variant="outlined"
                                margin="dense"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"

                                autoComplete="current-password"
                                onChange={e => setPasswordValue(e.target.value)}
                            />
                        </Grid>
                        <Grid item className={classes.loginItem} style={{textAlign :'right'}} >
                            <Button
                                title={Login}
                                onClick={() => onLoginClick()}
                                type="submit"

                                title="Login"

                                disabled={isLoading}
                            >
                                Login
                            </Button>
                        </Grid>

                    </form>






                </Grid>

            </Grid>
        </>

    )

}

export default Login;