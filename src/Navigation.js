import {Link} from 'react-router-dom';

function Navigation(){
    return (
    <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/addresses">Addresses</Link>
            </li>
          </ul>
        </nav>

    </header>
  )

}

export default Navigation;