import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from "../components/Home"
import Client from '../components/Client';
import Server from '../components/Server';
import AuthForm from '../components/AuthForm';
import Dashboard from '../components/Dashboard';
function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Home}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route exact path="/signin" render={props=>{
      return(
        <AuthForm buttonText="Log in" heading="Welcome Back."{...props}/>
      )
    }}/>
    <Route exact path="/signup" render={props=>{
      return(
        <AuthForm buttonText="Sign me up!" heading="Join Warbler Today."{...props}/>
      )
    }}/>
     <Route path="/client" component={Client}/>
     <Route path="/server" component={Server}/>
    </div>
    </Router>
    
  );
}

export default App;
