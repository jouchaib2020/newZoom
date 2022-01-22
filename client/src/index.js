import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainEmpty from './components/MainEmpty/MainEmpty';
import { v4 as uuidv4 } from 'uuid';

import App from './App';

const roomId = uuidv4();


ReactDOM.render(
    <Router>
        <Route path='/:roomId'>
            <App />
        </Route>
        <Route exact path='/'>
            <MainEmpty roomId={roomId} />
        </Route>
    </Router>,
    document.getElementById('root')
)
