import logo from './utils/images/logo.svg';
import './App.css';
import GlobalStyle from './globalStyles.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Data from "./pages/Data/Data.jsx"

function App() {
  return (
    
    <Router>
    <GlobalStyle/>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/data" exact component={Data} />
    </Switch>
    </Router>
    
  );
}

export default App;