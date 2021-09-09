import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookDetail from '../pages/Book//BookDetail/BookDetail.js';
import BookList from '../pages/Book//BookList/BookList.js';
import Layout from '../parts/Layout/Layout';
import Theme from '../theme/Theme.js';
import Login from './../authenticationManagment/Login.js';
import './App.css';






function App(props) {


  return (


    <BrowserRouter basename="bookstore">
      <Switch>

        <ThemeProvider theme={Theme}>

          <Route exact path="/">

            <Layout routeAccessability="private">
              <BookList />
            </Layout>

          </Route>

          <Route exact path="/bookdetail:id">

            <Layout routeAccessability="private">
              <BookDetail />
            </Layout>

          </Route>



          <Route exact path="/login">


            <Layout routeAccessability="public">
              <Login />
            </Layout>

          </Route>

      

        </ThemeProvider>

      </Switch>
    </BrowserRouter>




  );
}

export default App;
