import React from 'react';
import {BookCategoryReducer} from './BookCategoryReducer'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useReducer } from "react";


const useStyles = makeStyles((theme) => ({
    label: {

        lineHeight: '10px',
        padding: ' 10px',
        borderRadius: '25px',
        width: 'fitContent',
        display: 'inline-block',
        marginRight: '2px',
    }
}))

const Category =({category}) =>{
    const classes = useStyles();

    const [state, dispatch] = useReducer(BookCategoryReducer, {
        color: 'gray' ,
        backgroundColor :'black'
    });

    useEffect(() => {
        if (category)
            dispatch({ type: category })
    }, [])

    return (
        <div style={{ color: state.color , backgroundColor : state.backgroundColor }} className={classes.label}> {category} </div>
    )


}

const BookCategory =({children}) =>{

    if (!children) return ;
    
    return (
    
        ((children).split(",") || []).map((current) =>  <Category category = {current}/>)
                 
    )


}


export default BookCategory;