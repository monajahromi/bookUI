import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useReducer } from "react";


// Action and Adventure.
// Classics.
// Comic Book or Graphic Novel.
// Detective and Mystery.
// Fantasy.
// Historical Fiction.
// Horror.
// Literary Fiction.


const BookGenresReducer = (state, action) => {
    switch (action.type.toLowerCase()) {
        case 'action and adventure':
            return {
                ...state,
                color: 'pink',
                backgroundColor : 'gray'
            }
        case 'classics' :
            return {
                ...state,
                color: 'blue',
                backgroundColor : 'gray'
            }
        case 'historical fictionics':
                return {
                    ...state,
                    color: 'blue',
                    backgroundColor : 'gray'
                }    
        default: return  {
                ...state,
                color: 'red',
                backgroundColor : 'gray'
            }   

    }
}



const useStyles = makeStyles((theme) => ({
    label: {

        lineHeight: '10px',
        padding: ' 10px',
        borderRadius: '25px',
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