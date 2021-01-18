import './App.css';
import React, {useContext} from 'react'
import Header from "./components/Header";
import {ModeProvider} from "./context/contextProvider"
import SearchBox from "./components/SearchBox";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleCard from './components/SingleCard';
import Home from './components/Home';

function App() {

  return (
 <ModeProvider> 

    <div className="App">
      <Header/>
     <Router> 
       <Switch> 
    <Route path="/" exact component={Home}/>
    <Route path="/:country" component={SingleCard}/>
       </Switch>
     </Router>
    </div>
 </ModeProvider>
 
  );
}

export default App;
