import { Grid } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    label: {
        fontWeight: 'bold',
        color: 'gary',
        paddingRight: '20px'

    },
    
  
    row: {
        lineHeight: '2rem'
    },
  


}))


const BookDetailItem = ({ title, children }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.row} direction="row" container lg={12}>
            <Grid className={classes.label} item lg={1}>
                {title}
            </Grid>
            <Grid  lg={11}>

                {children}

            </Grid>

        </Grid>

    );
};

export default BookDetailItem;