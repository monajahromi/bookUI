import { Grid, Link, Tooltip } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBook } from '../../../api/BookAPI.js';
import BookRating from "../BookItemDesign/BookRating.js";
import staticImage from './../../../asset/book/staticImage.jpg';
import BookAuthors from './../BookItemDesign/BookAuthors';
import BookCategory from './../BookItemDesign/BookCategory';
import BookDetailItem from './BookDetailItem.js';

const useStyles = makeStyles((theme) => ({
  
    title: {
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
        fontSize: '2rem',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    image: {
        justifyContent: 'center',
        padding: '10px',

    },
    
    link: {

        marginRight: '5px',
        borderRadius: '2px',
        padding: '5px 10px'
    },
    link1: {
        color: ' #2979FF',
        backgroundColor: ' #E3F2FD',
    },
    link2: {
        color: '#00E676 ',
        backgroundColor: ' #E8F5E9',
    },
    link3: {

        color: ' #FF6D00',
        backgroundColor: ' #FFF3E0',
    },
    link4: {
        color: ' #F50057',
        backgroundColor: ' #FCE4EC',
    },
    link5: {
        color: ' #3D5AFE',
        backgroundColor: ' #E8EAF6',
    },


}))



const BookDetail = () => {
    const classes = useStyles();
    const params = useParams();
    const [book, setBook] = useState({});
    const [isLoading, setIsLoading] = useState();
    const [message, setMessage] = useState();


    useEffect(() => {
        getBook(params.id, setBook, setIsLoading, setMessage);

    }, [params])



    return (

        <Grid container direction="column" className="section" style={{ minHeight: '80vh' }}>
            {isLoading && !book && "loading"}
            {message}
            {book &&
                <>
                    <Grid className={classes.title} direction="row" container lg={12}>


                        {book.title}


                    </Grid>

                    <Grid className={classes.image} direction="row" container lg={12}>
                        <img src={staticImage} style={{ maxWidth: '250px' }}></img>




                    </Grid>

                    <BookDetailItem title="Authors">
                        <BookAuthors>{book.authors}</BookAuthors>
                    </BookDetailItem>


                    <BookDetailItem title="Categories">
                        <BookCategory>{book.categories}</BookCategory>
                    </BookDetailItem>


                    <BookDetailItem title=" Book Url">
                        <Tooltip title="view book">
                            <Link underline="none" color="textPrimary" href={book.url} target="_blank">
                                <LinkIcon />
                            </Link>
                        </Tooltip>
                    </BookDetailItem>

                    <BookDetailItem title=" Book converts">
                        <Link underline="none" className={`${classes.link} ${classes.link1}`} href={book.epub}>
                            epub
                        </Link>

                        <Link underline="none" className={`${classes.link} ${classes.link2}`} href={book.fb2}>
                            fb2
                        </Link>

                        <Link underline="none" className={`${classes.link} ${classes.link3}`} href={book.mobi}>
                            mobi
                        </Link>

                        <Link underline="none" className={`${classes.link} ${classes.link4}`} href={book.txt}>
                            txt
                        </Link>

                        <Link underline="none" className={`${classes.link} ${classes.link5}`} href={book.rtf}>
                            rtf
                        </Link>
                    </BookDetailItem>


                    <BookDetailItem title="Year">
                        {book.year}
                    </BookDetailItem>

                    <BookDetailItem title="Edition">
                        {book.edition}
                    </BookDetailItem>

                    <BookDetailItem title="Language">
                        {book.language}
                    </BookDetailItem>

                    <BookDetailItem title="Extension">
                        {book.extension}
                    </BookDetailItem>

                    <BookDetailItem title="Pages">
                        {book.pages}
                    </BookDetailItem>

                    <BookDetailItem title="Rating">
                        <BookRating rate={book.rating}></BookRating>
                    </BookDetailItem>

                    <BookDetailItem title="Description">
                        {book.description}
                    </BookDetailItem>




                </>

            }

        </Grid>
    )
}




export default BookDetail