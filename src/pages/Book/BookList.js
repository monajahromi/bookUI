import { Avatar, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import React from 'react';
import book from './book.json';
import SearchPanel from '../../pages/Book/SearchPanel.js';
import ResultPanel from "./ResultPanel";


const BookList = () => {
    



    return (
        <React.Fragment>
            <SearchPanel />
            
            <ResultPanel />
        </React.Fragment>
    );
};

export default BookList;