import React from 'react' ;
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js'
import PageA from './components/PageA'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
   
    <BrowserRouter>

        <Switch>

          <Route path="/" exact                 component={Home}/>
          <Route path="/PageA" exact                component={PageA}/>
          <Route path="/*"                component={Home}/>
          
        </Switch>
      
    </BrowserRouter>
  );
  }

export default App;
