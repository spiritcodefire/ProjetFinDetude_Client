import React from 'react'
import logo from '../logo.svg';
import { Link} from 'react-router-dom';
const home = () => {


    return (
        
        <header className="App-header">

          <div className="container">
            <div className="row">
              <div className="col-2"><Link to='/PageA'><button className="btn btn-info">Page A </button></Link></div>
              <div className="col-2"><button className="btn btn-info">Page B </button></div>
              <div className="col-2"><button className="btn btn-info">Page C </button></div>
              <div className="col-2"><button className="btn btn-info">Page D </button></div>
              <div className="col-2"><button className="btn btn-info">Page E </button></div>
              <div className="col-2"><button className="btn btn-info">Page F </button></div>
            </div>
          </div>
          
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
 
    )
}



export default home ;
