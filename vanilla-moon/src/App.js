import React from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gateaux">Gateaux & Pastries</Link>
        <Link to="/macaron">Macaron</Link>
        <Link to="contact">Contact</Link>
      </nav>

      <Switch>
        <Route path="/register">

        </Route>
        <Route path="/login">
          
        </Route>
      </Switch>



    </Router>
  );
}


export default App;
