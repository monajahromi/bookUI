import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import React from 'react';

const BookRating = ({rate}) => {
    return (
          [1,2,3,4,5].map((current=>{
            return   <span style={{color:'#FD8B2C'}}>
                        {parseFloat(rate) >= current  ? <StarIcon/> :  (parseFloat(rate) + 1) > current ?  <StarHalfIcon/> : <StarOutlineIcon/>    }
                 </span>
        } ))
      
    );
};

export default BookRating;