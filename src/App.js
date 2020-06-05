import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/Homepage';
import Spinner from './components/spinner/Spinner';

const HOCExample1 = lazy(()=>import('./components/HOC/NameContainer'));

function App() {
    return (
        <div>
          <Suspense fallback={<Spinner spin={true}/>}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/names" component={HOCExample1} />
            </Switch>
          </Suspense>
        </div>
    )
}

export default App;
