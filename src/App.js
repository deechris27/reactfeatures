import React, {Lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/Homepage';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
    )
}

export default App;
