import './App.css';
import Books from './pages/Books';
import Addresses from './pages/Addresses';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/addresses">
              <Addresses />
          </Route>
          <Route path="/books">
            <Books />
          </Route>

      </Switch>            
  </Router>
  );
}

export default App;
