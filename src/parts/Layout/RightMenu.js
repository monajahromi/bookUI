import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { default as React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {  FaUpload, FaFileInvoice} from "react-icons/fa";
import { Divider } from '@material-ui/core';
import { getDataFromSession } from '../../sessionManagment/session.js';
import { FaUser } from "react-icons/fa";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    list: {
      width: 250,
    },

    listItem :{
         
         textAlign : 'right'
    }
   
  });

const RightMenu = ({statusFromParent ,setStatusFromParent}) => {

    const classes = useStyles();
    const [anchorState, setAnchorState] = useState(); 
    const toggleDrawer =  (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
        setAnchorState(false)
        setStatusFromParent(false)
    }

    useEffect(()=>{
        if (statusFromParent)
        setAnchorState(statusFromParent)

    } ,[statusFromParent])

        const list =  <div  onClick= {toggleDrawer } onKeyDown = {toggleDrawer } className = {classes.list} >   <List >
                 <ListItem  className={`${classes.listItem} containerHeader` }>
                    <ListItemText primary=
                    
                    {getDataFromSession('person').firstName && 
                    <Typography  > 
                    <FaUser style={{marginLeft : '10px'}}/>
                     {getDataFromSession('person').firstName + " " + getDataFromSession('person').lastName }</Typography>   
                     }
                    >
                    
                      </ListItemText>
                    <ListItemIcon></ListItemIcon>
                    
                  </ListItem>
                    <Divider/>
                  <ListItem button  to="/home" component={Link} className={`${classes.listItem} containerHeader` }>
                    <ListItemText primary="صفحه اصلی"  />
                    <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
                    
                  </ListItem>

                  

                  
                  <ListItem button  to="/upload" component={Link} className={`${classes.listItem} containerHeader` }  >
                    <ListItemText primary="بارگذاری فایل" />
                    <ListItemIcon>
                      
                       <FaUpload/> 
                      </ListItemIcon>
                    	
                  {/* //  FaDolly
                    FaTags */}
                  </ListItem>

                  <ListItem button  to="/filesList" component={Link} className={`${classes.listItem} containerHeader` }  >
                    <ListItemText primary=" لیست فایل" />
                    <ListItemIcon>
                      
                       <FaFileInvoice/> 
                      </ListItemIcon>
                    	
                  {/* //  FaDolly
                    FaTags */}
                  </ListItem>



                  {/* <ListItem button  to="/loading" component={Link}>
                    <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
                    <ListItemText primary="لیست فروش" />
                  </ListItem> */}
              
              </List>
        </div>    
          ;
          
          
    return (
        <Drawer anchor={'right'} open={anchorState} onClose={toggleDrawer}>
            {list}
        </Drawer>
    );
};

export default RightMenu;