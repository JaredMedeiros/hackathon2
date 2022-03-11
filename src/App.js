import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductivityPage from './pages/ProductivityPage/ProductivityPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component = {LandingPage}/>
      <Route exact path='/ProductivityPage' component = {ProductivityPage}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
