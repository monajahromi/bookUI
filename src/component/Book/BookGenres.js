import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useReducer } from "react";
import tinycolor from 'tinycolor2'


// Action and Adventure.
// Classics.
// Comic Book or Graphic Novel.
// Detective and Mystery.
// Fantasy.
// Historical Fiction.
// Horror.
// Literary Fiction.


const BookGenresReducer = (state, action) => {
    const lightpink ='#F8BBD0'
    const lightPurple  = '#E1BEE7'
    const lightGreen  = '#E8F5E9'
    const lightYellow  = '#FFF9C4'
    const lightBlue  = '#B3E5FC'

    const darken =  (color)=>{
        return  tinycolor(color).darken(50).toString() ; 
    }

    const genetareColorAndbackgorundcolor = (color) =>{
        return {  backgroundColor : color,
                  color: darken(color)  }
    }

    switch (action.type.toLowerCase()) {
        case 'action and adventure':
            return {
                ...state,
                ...genetareColorAndbackgorundcolor( lightBlue),
                
                
            }
        case 'classics' :
            return {
                ...state,
                  ...genetareColorAndbackgorundcolor( lightPurple),
                
            }
        case 'historical fictionics':
                return {
                    ...state,
                    ...genetareColorAndbackgorundcolor( lightGreen),
                    
                }    
        default: return  {
                ...state,
                ...genetareColorAndbackgorundcolor( lightYellow),
                
            }   

    }
}



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

export default function BookGenres(genres) {
    const classes = useStyles();

    const [state, dispatch] = useReducer(BookGenresReducer, {
        color: 'gray'
    });

    useEffect(() => {
        if (genres)
            dispatch({ type: genres })
    }, [])

    return (
        <div style={{ color: state.color , backgroundColor : state.backgroundColor }} className={classes.label}> {genres} </div>
    )


}