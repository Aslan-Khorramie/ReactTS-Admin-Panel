import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
// import pages
import Login from './pages/Login/Login';
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
