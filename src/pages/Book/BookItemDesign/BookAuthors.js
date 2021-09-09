import { Typography } from "@material-ui/core";
import React from 'react';

const BookAuthors = ({children}) => {
    
    
    if (!children) return ;
    
    return (
    

        ((children || "").split(",")  || []).map((current, index, array) =>
                        
            <> 
            <Typography display="inline">{current}</Typography>
            {(index != array.length -1) && <Typography  display="inline" style={{padding : '0 10px'}}>|</Typography>}
            
            </>
            
            )



        )
};

export default BookAuthors;