import './App.css';
import Books from './pages/Books';
import Addresses from './pages/Addresses';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route path="/addresses">
              <Addresses />
          </Route>
          <Route path="/books">
            <Books />
          </Route>

          <Route path="/">
              <p>Estas en Home</p>
          </Route>
      </Switch>            
  </Router>
  );
}

export default App;
