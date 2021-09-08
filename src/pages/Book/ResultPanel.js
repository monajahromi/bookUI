import  React , {useReducer} from 'react';
import { DataGrid, GridToolbar ,GridOverlay } from '@mui/x-data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import book from './book.json';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { ButtonBase, Divider, Grid, IconButton ,Button} from "@material-ui/core";
import { BookGenresReducer } from './BookGenres.reducer';
import BookGenres from './../../component/Book/BookGenres.js'
import { AddShoppingCart } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';


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





export default function ResultPanel({searchTerm}) {
  const classes = useStyles();
  const columns = [
 
    {
      field: 'title',
      headerName: 'Title',
      width: 350,
      editable: true,
    },
    {
      field: 'country',
      headerName: 'country',
      width: 200,
      editable: true,
    },
    {
      field: 'author',
      headerName: 'Author',
       width: 180,
      editable: true,
    },
    {
      field: 'genre',
      headerName: 'Genre',
      description: 'This column has a value getter and is not sortable.',
      width: 200,
      // cellClassName : ()=>classes.cart,
      renderCell : (n)=>BookGenres(n.value)
      
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
    {
      field: 'id',
      headerName: 'view',
      width: 70,
      renderCell : (n)=> {
         
        return <IconButton color="secondary" component ={Link}  to="/bookdetail">
         <SearchIcon />
       </IconButton>
        }
        
                     }
    
  ];

  function CustomLoadingOverlay() {
    return (
      <GridOverlay>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress />
        </div>
      </GridOverlay>
    );
  }


  return (
    <Grid container direction="column" className="section">
      
  {searchTerm}
  
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={(book.books).map((item, index) => Object.assign(item, {id : index }))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        loading
        
        components={{

          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: GridToolbar,
          NoRowsOverlay : () => { return <div style={{backgroundColor : 'red'}}>{"dddno row"}</div>},
      
         
        }}
     
      
      />
    </div>
    </Grid>
  );
}
