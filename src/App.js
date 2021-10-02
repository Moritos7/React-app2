import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbar';
import Home from './View/Home';
import Login from './View/Login';
import SignIn from './View/SignIn';
import Profile from './View/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from 'react-redux';
import PublicRouter from './Components/PublicRouter';
import PrivateRouter from './Components/PrivateRouter';

function App() {
  const auth = useSelector(state => state.auth)
  return (
    <Router>
      <Navbars/>
      <Switch>
          <PublicRouter auth={auth} restricted={false} component={Home} path="/" exact />
          <PublicRouter auth={auth} restricted={true} component={Login} path="/login" exact />
          <PublicRouter auth={auth} restricted={true} component={SignIn} path="/signIn" exact />
          <PrivateRouter auth={auth} component={Profile} path="/profile" exact />
      </Switch>
    </Router>
  );
}

export default App;
