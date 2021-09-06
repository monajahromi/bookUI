import { Grid } from "@material-ui/core";
import Button from './../component/Button/Button.js';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { default as React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { gateway } from '../services/API/hosts.js';
import { setDataToSession } from '../sessionManagment/session.js';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import logo from './../asset/images/logo.png';



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
    const [waiting, setWaiting] = useState(false);
    const [message, setMessage] = useState();

    const loginfunc = () => {
        setWaiting(true)

        axios.create({
            params: {
                password: passwordValue,
                username: loginValue,
                domainName: 'centralized',
                appName: 'userinternetbank',
                method: 'login'

            },
        }).post(gateway)

            .then(res => {

                setDataToSession('ncode', loginValue)
                setDataToSession('id_token', res.data.ticket)
                setLoggedin(true);
                setWaiting(false);

                if (loginValue.length == 15) {

                    //setting role
                    setDataToSession('r', "merchant")
                }


            })
            .catch(err => {
                console.log(err)
                setWaiting(false);
                setMessage("خطایی رخ داده است")
            }
            );
    }



    const onSeachClick = (event) => {
        event.preventDefault()
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
                    <form onSubmit={onSeachClick}>
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
                                onClick={() => loginfunc()}
                                type="submit"

                                title="Login"

                                disabled={waiting}
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