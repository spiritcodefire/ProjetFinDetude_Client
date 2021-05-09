import React from 'react' ;
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './/AAA-Pages/Home.js'
import PageA from './AAA-Pages/PageA.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import ProductDetail from './AAA-Pages/ProductDetail'


function App() {
  
  return (
   
    <BrowserRouter>
      <Header />
        <Switch>

          <Route path="/" exact               component={Home}/>
          <Route path="/PageA" exact         component={PageA}/>
          <Route path="/bigproduct/:id"        component={ProductDetail}/>

          <Route path="/*"                component={Home}/>
          
        </Switch>
      
    </BrowserRouter>
  );
  }

export default App;
