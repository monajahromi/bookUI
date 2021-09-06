import { createMuiTheme } from '@material-ui/core/styles';
import {containerBackground,tabelBorder,buttonColor,purple,textOnpurple,tableHeaderBackground,listIconColor} from "./colors.js"
import tinycolor from 'tinycolor2'




const Theme = createMuiTheme({
  
  //0288D1   operations
  palette: {
    primary: {
      main: '#00B0FF',
    },
    secondary: {
      main: '#e150ac',
    },
  },

  overrides: {

 
    MuiTableContainer :{
      root:{
        margin : '1rem 0',
      },
    },

    MuiButton :{
      root:{
        '&:hover' :{
          backgroundColor :tinycolor('#e150ac').darken(10).toString()
        }
      }
    },



    // MuiContainer: {
    //   maxWidthLg: {
    //     maxWidth: '1800px !important',
    //   }
    // },


    // MuiGrid: {
    //   backgroundColor : '#FAF9F5',
    //   item: {
    //     backgroundColor : '#FAF9F5'
    //   },
    //   container:{
      
    //   backgroundColor: '#FAF9F5',
     
    //   }
    // },
    
    // MuiButton: {
    //   contained : {
    //     backgroundColor : buttonColor ,
    //   },
    //   label: {
    //     display: 'flex',
    //     textAlign: 'center',
    //     whiteSpace: 'nowrap',
    //     flexDirection: 'row',
        
    //   },
    //   root :{
    //     transitionDuration : '0.5s',
    //     // "& :hover" :{
    //     //   color :'#2980b9'
    //     // }
      
    //   }
      


    // },
    MuiTable :{
      root :{
        "& tbody tr:last-child td" :{
          borderBottom : 'none'
        },
        
        "& tbody tr:last-child th" :{
          borderBottom : 'none'
        }
    }
  },

  // MuiFormHelperText:{
  //   contained:{
  //     textAlign: 'right',
  //   },
  //   root:{
  //     textAlign: 'right !important',
  //   },
    

  // },

  MuiTableHead : {

    root:{
      backgroundColor : tableHeaderBackground,
      
    }
  },
 
  
    //fontSize handeling
    // MuiFormLabel :{
    //   root :{
    //     fontSize : '.8rem !important',
    //   },
    // },
    // MuiInputBase: {
    //   input :  {
    //     fontSize : '.8rem !important',
    //   },
    //   root : {
    //     '&.Mui-disabled' :{
    //       color : '#2c3e50 !important',
    //       fontWeight : 'bold'
    //     }
    //    } 
    // },
    MuiTypography:{
      body1:{
        fontSize : '.8rem !important',
        
      }
      
    },
    MuiListItem :{
      // gutters: {
      //   fontSize: '1rem',
      //  // marginTop: '30px',
      //   fontWeight: 'bold',
      //   borderRadius: '4px',
      //   marginBottom: '5px',
      //   padding :'unset !important'
      // },
      root :{
        fontSize : '.8rem ',
       
       
      },
    }, 

    // MuiButtonBase :{
    //   root :{
    //     fontSize : '.8rem !important',
    //   }
    // } ,
    MuiTableCell:{
      root: {
        fontSize : '.75rem !important',
        borderBottom : tabelBorder,
      },
      head :{
        color :textOnpurple,
      }
    },
    // MuiSvgIcon :{
    //   root:{
    //     fontSize : '.8.5rem',
    //     '&.listIcon' :{
    //       color :listIconColor
    //     }
    //   }
    // },
    // MuiIconButton : {
    //   label :{
    //     fontSize : '1.2rem'
    //   }
    
    // }

 
 
 
   
 
 
 
 
 
 
 
 
  },



  
});


export default Theme;