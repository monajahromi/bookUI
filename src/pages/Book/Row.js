import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



function Row(props) {
  const { row, index } = props;
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow key={`bookList-${row.id}`} hover className={classes.root}>
        <TableCell align="right">{index}</TableCell>






      </TableRow>



    </React.Fragment>
  );
}


export default Row;
