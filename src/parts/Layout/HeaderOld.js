import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import { getDataFromSession } from '../../sessionManagment/session.js';
import useStyles from './HeaderStyles.js';
import RightMenu from './RightMenu.js'
import Grid from "@material-ui/core/Grid";
import { FaUser } from "react-icons/fa";









const Header = (props) => {


 const history = useHistory();
 const location = useLocation();
 const [rightMenuToggle , setrightMenuToggle] = useState();
 
 console.log("location " , location.pathname)

  const logout = () => {
    sessionStorage.clear();
   // sessionStorage.removeItem("ncode");
   // sessionStorage.removeItem("id_token");
    window.location.href = './';

  }

  const   goBack = ()=>  {
    
    history.goBack()
  }

  const classes = useStyles();

  const handelRightMenuToggle = ()=>{
    setrightMenuToggle(true)
  }
  return (
    
    <>

      <HideOnScroll {...props}>


        <AppBar position="static" className={classes.header}  >
          <Container maxWidth="lg" disableGutters={true} className={classes.headerContainer}>
          <Grid container lg={12} style={{backgroundColor : 'unset',flexGrow: 1, padding : 0}}  >
            <Grid xs={12} md={6} alignItems = "row">
            <Grid container direction = "row" alignItems = "center" style={{backgroundColor : 'unset' ,padding : 0}} >
            <IconButton edge="start" style={{ marginLeft: 2 }} color="inherit" aria-label="menu" onClick  = {handelRightMenuToggle} >
              <MenuIcon  className = {classes.headerIcon}/>
            </IconButton>
            <RightMenu statusFromParent = {rightMenuToggle} setStatusFromParent = {setrightMenuToggle}></RightMenu>
            <img src={`${process.env.PUBLIC_URL}/images/mellat.png`}  height="48px"/>
                <Typography className = {classes.appname} >
                  سیستم جامع مالی 
                </Typography>
              
                </Grid>
            </Grid>    
            
         
            
            <Grid xs={12} md={6} style={{    display:' inline-flex',   flexDirection: 'row-reverse', alignItems : "center "}}>

                <Tooltip title="خروج">
                  <Button color="inherit" onClick={()=>logout()} ><PowerSettingsNewIcon className = {classes.headerIcon}/></Button>
                </Tooltip>

            {location.pathname != "/home" &&
            <Tooltip title="صفحه قبل ">
            <Button color="inherit"  onClick ={()=>goBack()}><ArrowBackIosIcon className = {classes.headerIcon}/></Button>
            </Tooltip>
            }
            {location.pathname != "/home" &&
             
             <Tooltip title="خانه ">
               <Button color="inherit" to="/home" component={Link}><HomeIcon className = {classes.headerIcon}/></Button>
              </Tooltip>  
            }
           
              
            </Grid>
           


            </Grid>

          </Container>


        </AppBar>

      </HideOnScroll>
    </>
  );
};


function HideOnScroll(props) {
  const { children, window } = props;


  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export default Header;