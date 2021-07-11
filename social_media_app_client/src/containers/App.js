import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from "../components/Home"
import Client from '../components/Client';
import Server from '../components/Server';
function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Home}/>
     <Route path="/client" component={Client}/>
     <Route path="/server" component={Server}/>
    </div>
    </Router>
    
  );
}

export default App;
