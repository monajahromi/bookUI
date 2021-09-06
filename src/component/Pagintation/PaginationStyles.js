import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  {paginationColor,paginationColorText,paginationBackgroundHover} from './../../../Theme/colors.js'




const useStyles  = makeStyles({

    pagingHolder : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
    paging : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection : 'row-reverse'
    },

    button : {
        margin : '0 1px' ,
        minWidth : '40px',
        color : '#880e4f'
    },

    active:{
        backgroundColor :'#f06292' , 
        color :paginationColorText,
      
      '&:hover' :{
        color :paginationColorText,
        backgroundColor : '#ec407a'
      }
    },
   
    paginationColorText :{
        color :'#880e4f'
        
    },

    ResultListSize :{

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1rem',
    }
      

})




export default useStyles ; 