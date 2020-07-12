import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddAdmin from '../components/AddAdmin';
import EditAdmin from '../components/EditAdmin';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/add" component={AddAdmin} />
                <Route path="/admin/:id" component={EditAdmin} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
