import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, TextField, Tooltip } from "@material-ui/core";
import Button from './../../component/Button/Button.js';
import StarIcon from '@material-ui/icons/Star';
import BookGenres from './../../component/Book/BookGenres'
import a from './../../asset/book/a.jpg'

const useStyles = makeStyles((theme) => ({
    label: {
        fontWeight: 'bold',
        color: 'gary',
        paddingRight: '20px'

    },
    value: {
        color: 'black',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        // :hover : {
        //     overflow: visible;
        //   }

    },
    title: {
        color:  theme.palette.secondary.main,
        fontWeight: 'bold',
        fontSize: '2rem',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    image: {
        justifyContent: 'center',
        padding: '10px',

    },
    row: {
        lineHeight: '2rem'
    },
    link:{
       
        marginRight: '5px',
        borderRadius: '2px',
        padding : '5px 10px'
    },
    link1:{
        color:' #2979FF',
        backgroundColor:' #E3F2FD',
    },
    link2:{
        color:'#00E676 ',
        backgroundColor:' #E8F5E9',
    },
    link3:{
        
        color:' #FF6D00',
        backgroundColor:' #FFF3E0',
    },
    link4:{
        color:' #F50057',
        backgroundColor:' #FCE4EC',
    },
    link5:{
        color:' #3D5AFE',
        backgroundColor:' #E8EAF6',
    },


}))



const BookDetail = () => {
    const classes = useStyles();
    const labelWidth = 1;
    const valueWidth = 11

    return (
        <Grid container direction="column" className="section">
            <Grid className={classes.title} direction="row" container lg={12}>


                Practical MongoDB


            </Grid>

            <Grid className={classes.image} direction="row" container lg={12}>
                <img src={a} style={{ maxWidth: '250px' }}></img>




            </Grid>


            <Grid className={classes.row} direction="row" container lg={12}>
                <Grid className={classes.label} item lg={labelWidth}>
                    Author
                </Grid>
                <Grid className={classes.value} lg={valueWidth}>
                    Practical MongoDB  Architecting, Developing, and Administering MongoDB
                </Grid>

            </Grid>


            <Grid className={classes.row} direction="row" container lg={12}>
                <Grid className={classes.label} item lg={labelWidth}>
                    Categories
                </Grid>
                <Grid className={classes.value} lg={valueWidth}>
                {BookGenres('action and adventure')}{ BookGenres('classics') }
                </Grid>

            </Grid>


            <Grid className={classes.row} direction="row" container lg={12}>
                <Grid className={classes.label} item lg={labelWidth}>
                    Series
                </Grid>
                <Tooltip title="  http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1">
                    <Grid className={classes.value} lg={valueWidth}>
                    
                      <Link underline ="none"  color="secondary" href = "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1">
                      series</Link>
                    
                    </Grid>
                </Tooltip>

            </Grid>

            <Grid className={classes.row} direction="row" container lg={12}>
                <Grid className={classes.label} item lg={labelWidth}>
                    Series
                </Grid>
                <Tooltip title="  http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1">
                    <Grid className={classes.value} lg={valueWidth}>
                    
                      <Link underline ="none" className={`${classes.link} ${classes.link1}`} color="secondary" href = "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1">
                      series</Link>
                      <Link underline ="none" className={`${classes.link} ${classes.link2}`} color="secondary" href = "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1">
                      series</Link>
                      <Link underline ="none" className={`${classes.link} ${classes.link3}`} color="secondary" href = "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1">
                      series</Link>
                      <Link underline ="none" className={`${classes.link} ${classes.link4}`} color="secondary" href = "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1">
                      series</Link>
                      <Link underline ="none" className={`${classes.link} ${classes.link5}`} color="secondary" href = "http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1">
                      series</Link>
                      
                    
                    </Grid>
                </Tooltip>

            </Grid>

            <Grid className={classes.row} direction="row" container lg={12}>
                <Grid className={classes.label} item lg={labelWidth}>
                    Rating
                </Grid>
                <Tooltip title="  http://bookzz.org/cs2/liveconverter/?source=http%3A%2F%2Fdlx.bookzz.org%2Fgenesis%2F721000%2Fae49d9bb94118632df0691df18706319&input_format=pdf&output_format=EPUB&download=1">
                    <Grid className={classes.value} lg={valueWidth}>
                    {[1,2,3,4,5].map((current=>{
                                return   <span style={{color:'#FD8B2C'}}>
                                             <StarIcon/> 
                                         </span>
                                                }
                                      ))
                    }
                    </Grid>
                </Tooltip>

            </Grid>



        </Grid>
    )
}




export default BookDetail