import React, { useState, Fragment } from 'react';
import { Info } from './Info.jsx';
import LoginController from './LoginController'
import Register from './RegisterForm'
import { taskCollection } from '../api/links';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import AppStore from './components/AppStore'
import Expenses from './components/Expenses'
export default function HomePage() {
    return (
        <div>
           
            <Router>
                <main>
               
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/AppStore">AppStore</Link></li>
                            <li><Link to="/expenses">Expenses</Link></li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Register} />
                    <Route path="/AppStore" component={AppStore} />
                    <Route path="/expenses" component={Expenses} />

                </main>
            </Router>
          
        </div>
    )
}
