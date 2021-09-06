import * as React from 'react';
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import book from './book.json';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { Divider, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  searchPanel: {
      padding: '3rem 1.5rem',

  },
  title: {
      fontSize: '2.5rem',
      fontWeight: '300',
  },
  cart: {
 backgroundColor :'red'
  }
}))





export default function DataGridDemo() {
  const classes = useStyles();
  const columns = [
 
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'subtitle',
      headerName: 'Subtitle',
      width: 150,
      editable: true,
    },
    {
      field: 'authors',
      headerName: 'Author',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'kind',
      headerName: 'kind',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      // cellClassName : ()=>classes.cart,
      renderCell : (n)=> {
        return 
      }
      
    },
    {
      field: 'rating',
      headerName: 'Rating',
      description: 'rate of book is claculated from SCORE divide by 20',
      sortable: false,
      width: 160,
      // cellClassName : ()=>classes.cart,
      renderCell : (n)=> {return  [1,2,3,4,5].map((current=>{
                                return   <span style={{color:'#FD8B2C'}}>
                                            {parseFloat(n.value) > current  ? <StarIcon/> :  (parseFloat(n.value) + 1) > current ?  <StarHalfIcon/> : <StarOutlineIcon/>    }
                                     </span>
                            } ))
                           }
      
    },
  ];
  return (
    <Grid container direction="column" className="section">
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={book.books}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
          NoRowsOverlay : () => { return <div style={{backgroundColor : 'red'}}>{"dddno row"}</div>}
        }}
     
      
      />
    </div>
    </Grid>
  );
}
