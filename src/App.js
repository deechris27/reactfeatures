import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Spinner from './components/spinner/Spinner';
import LoginPage from './components/Hoc2/LoginPage';
import AccountPage from './components/Hoc2/AccountPage';
import DashBoard from './components/Hoc2/DashBoard';
import ButtonContainer from './components/HOC3/ButtonContainer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ExampleComponent from './components/ErrorBoundary/ExampleComponent';
import PortalExample from './components/Modal/PortalExample';

const HOCExample1 = lazy(() => import('./components/HOC/NameContainer'));
const HOCExample2 = lazy(() => import('./components/HOC1/TimerContainer'));

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<Spinner spin={true} />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/names" component={HOCExample1} />
            <Route path="/timer" component={HOCExample2} />
            <Route path="/login" component={LoginPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/dash" component={DashBoard} />
            <Route path="/button" component={ButtonContainer} />
            <Route path="/example" render={() => <ErrorBoundary><ExampleComponent /></ErrorBoundary>} />
            <Route path="/portal" component={PortalExample} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App;
