import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage'
import OtherPage from '../components/OtherPage';

const AppRouter = ()=>{
   return ( 
   <BrowserRouter>
    <Header />
     <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/other" component={OtherPage} exact={true}/>
     </Switch>
    </BrowserRouter>
    );
};

export default AppRouter;