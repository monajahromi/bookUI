import { Grid, IconButton } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import SearchIcon from '@material-ui/icons/Search';
import { DataGrid, GridOverlay, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBookList } from '../../../api/BookAPI';
import BookAuthors from "../BookItemDesign/BookAuthors";
import BookCategory from '../BookItemDesign/BookCategory';
import BookRating from '../BookItemDesign/BookRating';
import SearchPanel from "./SearchPanel";






export default function ResultPanel() {

  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [message, setMessage] = useState();
  const [searchTerm, setSearchTerm] = useState();



  useEffect(() => {
    getBookList(searchTerm, setBookList, setIsLoading, setMessage)
  }, [searchTerm])

  const columns = [

    {
      field: 'title',
      headerName: 'Title',
      width: 350,

    },

    {
      field: 'authors',
      headerName: 'Author',
      width: 300,
      renderCell: (n) => <BookAuthors>{n.value}</BookAuthors>

    },
    {
      field: 'categories',
      headerName: 'Categories',
      description: 'a book may have multi categories!',
      width: 400,
      renderCell: (n) => <BookCategory>{n.value}</BookCategory>

    },
    {
      field: 'rating',
      headerName: 'Rating',
      sortable: false,
      width: 160,
      renderCell: (n) => <BookRating rate={n.value}></BookRating>

    },
    {
      field: 'id',
      headerName: 'view',
      width: 70,
      renderCell: (n) => {
        return (
          <IconButton color="secondary" component={Link} to={`/bookdetail${n.value}`}>
            <SearchIcon />
          </IconButton>
        )
      }

    }

  ];


  return (
    <React.Fragment>

      <SearchPanel setSearchTerm={setSearchTerm} />
      <Grid container direction="column" className="section">

        

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={bookList}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            loading={isLoading}
            components={{
                Toolbar: GridToolbar,
            }}


          />
        </div>
      </Grid>
    </React.Fragment>
  );
}
