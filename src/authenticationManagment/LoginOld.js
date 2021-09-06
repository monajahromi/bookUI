import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Error from "../parts/Notify/Error.js";
import { dataExistInSession, setDataToSession } from '../sessionManagment/session.js';
import { gateway } from '../services/API/hosts.js';
import useStyles from './styles.js';

const Login  =  () =>{
  
  const classes = useStyles();
  
  const [loginValue, setLoginValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
 
  const [loggedin, setLoggedin] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [message, setMessage] = useState();

  
      
    useEffect(()=>{
      if (dataExistInSession("id_token")){
          setLoggedin(true);
       
      }
      


      
  },[])
        
    const loginfunc  = ()=>{
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
     
                setDataToSession('ncode' , loginValue )
                setDataToSession('id_token'  ,res.data.ticket )
                setLoggedin(true);
                setWaiting(false);

                if (loginValue.length == 15){
                  
                  //setting role
                  setDataToSession('r' , "merchant" )
                }
               
                
            })
        .catch(err => {console.log(err)
              setWaiting(false);
              setMessage("خطایی رخ داده است")
            }
              );
    }








    return (
        
         <>
      {loggedin && <Redirect to="/"></Redirect>}     
      
       
     <Container component="main" maxWidth="xs">
     
     
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
           سامانه مالی بیمه ملت
           </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="loginValue"
            label="نام کاربری"
            name="loginValue"
            onChange={e => setLoginValue(e.target.value)}
            autoFocus
            
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز عبور"
            type="password"
            id="password"
            dir="rtl"
            autoComplete="current-password"
            onChange={e => setPasswordValue(e.target.value)}
            
          />
          
          <Button
           
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>loginfunc()}
            disabled = {waiting}
          >
            ورود
          </Button>

         
          <div style={{width : '100%' , textAlign : 'center'}}> 
          {waiting && <CircularProgress/>}
          {message && <Error value={message} ></Error>} 
          </div>
          
        </form>
      </div>
      
    </Container>
    </>
    )  

}

export default Login;