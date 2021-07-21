import React, { Suspense } from 'react';
import './App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
const Products = React.lazy(() => import('./pages/Products'));
const Addresses = React.lazy(() => import('./pages/Addresses'));
const Books = React.lazy(() => import('./pages/Books'));


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/addresses">
            <Suspense fallback={<div>Loading...</div>}>
              <Addresses />
            </Suspense>
          </Route>
          <Route path="/books">
            <Suspense fallback={<div>Loading...</div>}>
              <Books />
            </Suspense>
          </Route>
          <Route path="/products">
            <Suspense fallback={<div>Loading...</div>}>
              <Products />
            </Suspense>
          </Route>

      </Switch>            
  </Router>
  );
}

export default App;
