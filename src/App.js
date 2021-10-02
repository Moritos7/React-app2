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


  const Sandwiches_Libanais=[
    {nom:"Fromage",prix:4000},
    {nom:"Salami",prix:4000},
    {nom:"Thon",prix:4200},
    {nom:"Jambon",prix:4200},
    {nom:"Chawarma",prix:4500},
    {nom:"Escalope grillée/pannée",prix:4500},
    {nom:"kabeb",prix:4600}
  ]

  const Sandwiches_Makloub=[
    {nom:"Fromage",prix:4200},
    {nom:"Salami",prix:4200},
    {nom:"Thon",prix:4400},
    {nom:"Jambon",prix:4400},
    {nom:"Chawarma",prix:4900},
    {nom:"Escalope grillée/pannée",prix:4900},
    {nom:"kabeb",prix:5000}
  ]

  const Supplementaires=[
    {nom:"Frites",prix:500},
    {nom:"Mayonnaise",prix:500},
    {nom:"Ketchup",prix:500},
    {nom:"BBQ",prix:500},
  ]

  const Boisson=[
    {nom:"Eau Minerale 0.5L",prix:800},
    {nom:"Eau Minerale 1.5L",prix:1500},
    {nom:"Coca Cola 0.5L",prix:1500},
    {nom:"Coca Cola 1.5L",prix:3000},
  ]
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
