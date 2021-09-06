import { makeStyles } from '@material-ui/core/styles';
import {headerBackgoundColor ,headerTextColor} from '../../Theme/colors.js' ; 



const useStyles = makeStyles((theme) => ({
  headerIcon :{
    
      fontSize : '1.2rem !important',      
    
  },
  appname :{
    fontSize : '1rem !important', 
    fontWeight : 'bold'  ,
    marginRight :'15px'
  }
  ,
    header:{
      minHeight : '65px',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor : headerBackgoundColor,
      color : headerTextColor, 
    },

      headerContainer:{
        flexDirection: 'row',
        alignItems :'center',
        display : 'flex'

      }
  }));


export default   useStyles ; 