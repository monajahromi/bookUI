import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import {FirstPage,LastPage,NavigateNext,NavigateBefore} from '@material-ui/icons';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './PaginationStyles.js';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';

const Pagination = ({mainList  ,setPaginatedList }) => {

    const [activePage, setActivePage] = useState(0);
    
    const[fromPage , setFromPage] = useState(0);
    const[noPagination , setNoPagination] = useState();
    const [pagesCount, setPagesCount] = useState(0);
    const availableListSizes=[10, 50, 100]
    const[listSize , setListSize] = useState(availableListSizes[0]);
    const classes = useStyles();


    useEffect(() => {
        
        if (!mainList || mainList.length <1) {
            setNoPagination(true) ;
        }
        
        
      
      

    } , [mainList])



    useEffect(() => {

     if (mainList.length % listSize === 0)
          setPagesCount(mainList.length / listSize)
    
        else
          setPagesCount(parseInt(mainList.length / listSize) + 1)
          setPaginatedList(mainList.slice((listSize * activePage), (listSize * (activePage + 1))))
    
      }, [activePage, listSize, mainList])

   

    const handelChangePage =(item) =>{
        if (item === activePage) return ;
        setActivePage(item)  
    }

    const handelChangeListSize = (item) =>{
        setListSize(item)
        setActivePage(0) ; 
       
    }

    const handelOnNextPage =()=> {
        setActivePage(activePage + 1)  
        setFromPage(Math.min(fromPage + 1 ,pagesCount - 5 ))
    }

    const handelOnPreviuosPage =()=> {
        setActivePage(activePage - 1)  
        setFromPage(Math.max(fromPage - 1 , 0) )
    }

    const handelOnFirstPage= ()=>{
        setActivePage(0)  
        setFromPage(0)
    }
    
    const handelOnLastPage= ()=>{
        setFromPage(Math.max( 0 , pagesCount - 5 ))
        setActivePage(pagesCount-1)  
        
    }

    return (
        <div  className ={classes.pagingHolder}>
             <div  className ={classes.ResultListSize}>
             <InputLabel id="ResultListSize"   >تعداد نتیجه در هر صفحه</InputLabel>
                    <Select  
                    labelId="ResultListSize"
                    id="ResultListSize-helper"
                    value={listSize}
                    onChange={(event)=>handelChangeListSize(event.target.value)}
                    >
                   { availableListSizes.map((item)=> <MenuItem value={item} >{item}</MenuItem> )      }
                   
                    </Select>
            </div>        
            <div className ={classes.paging}>
             
            <Tooltip title="صفحه نخست">
            <IconButton  variant='outlined' onClick={()=> handelOnFirstPage()} className={classes.paginationColorText}>
                
                <FirstPage/>
            </IconButton >
            </Tooltip>
            
            <Tooltip title="صفحه قبل">
            <IconButton  variant='outlined' onClick={()=> handelOnPreviuosPage()} disabled ={activePage === 0 } className={classes.paginationColorText}>
                <NavigateBefore/>
            </IconButton >
            </Tooltip>
            
            
                {pagesCount < 6 && Array.from({length: Math.min(pagesCount , 5)}, (_, i) => i ).map((item)=>{
                    
                    return  <Button  className ={(item === activePage) ? `${classes.button} ${classes.active}` : classes.button} onClick={()=> handelChangePage(item)} >{item+1} </Button>

                    
                }
                
                )}

                {pagesCount >= 6 && Array.from({length: Math.min(pagesCount , 5)}, (_, i) => i + fromPage ).map((item)=>{
                     return  <Button  className ={(item === activePage) ? `${classes.button}  ${classes.active}` : classes.button}  onClick={()=> handelChangePage(item)} >{item+1} </Button>
                    
                }
                
                )}
            
            {pagesCount > 5 && <MoreHorizIcon className={classes.paginationColorText}/>}
            
            <Tooltip title="صفحه بعد">    
            <IconButton  variant='outlined' onClick={()=> handelOnNextPage()} disabled ={activePage === pagesCount - 1} className={classes.paginationColorText}>
                <NavigateNext/>
            </IconButton >
            </Tooltip>
            
            <Tooltip title="صفحه آخر">
            <IconButton  variant='outlined' onClick={()=> handelOnLastPage()}  className={classes.paginationColorText}>
                <LastPage/>
            </IconButton >
            </Tooltip>
                
            </div>

            <div>
                
                
               
                
            </div>
        </div>
    );
};

export default Pagination;