import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookList from '../pages/Book/BookList.js';
import Login from './../authenticationManagment/Login.js';
import Layout from '../parts/Layout/Layout';
import Theme from '../theme/Theme.js';
import './App.css';
import BookDetail from '../pages/Book/BookDetail.js';






function App(props) {


  return (


    <BrowserRouter basename="financial">
      <Switch>

        <ThemeProvider theme={Theme}>

          <Route exact path="/">

            <Layout>
              <BookList />
            </Layout>

          </Route>

          <Route exact path="/bookdetail">

          <Layout>
            <BookDetail />
          </Layout>

          </Route>


          <Route exact path="/loading">
            <div>چند لحظه صبر نمایید...</div>

          </Route>


          <Route exact path="/login">


            <Layout>
              <Login />
            </Layout>

          </Route>
          {/* </ThemeProvider> */}

        </ThemeProvider>

      </Switch>
    </BrowserRouter>




  );
}

export default App;
