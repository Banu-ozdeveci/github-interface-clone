import React from 'react';
import { BrowserRouter ,Switch,Route,Redirect } from 'react-router-dom';
import './App.css';
import UserPage from './container/UserPage';


const App =() => {
  return (
    <BrowserRouter>
    <Switch>
<Route path ="/:userName" component = {UserPage}/>
<Redirect to = "/Banu-ozdeveci"/>

    </Switch>
    </BrowserRouter>
     
  );
}

export default App;
