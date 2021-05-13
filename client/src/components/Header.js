import React from 'react'
import { Link} from 'react-router-dom';

const Haader = () => {
    return (
        <div>

            <div className="headerPc">
                <div className="flex-containerPC">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="#">Nous Conctactez</Link></div>
                    <div><Link to="#">Votre Commande</Link></div>
                    <div><Link to="/login">Login</Link></div>
                    <div><Link to="/card">Card</Link></div>
                </div>
            </div>

            <div className="headerXS">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>

        </div>
    )
}

export default Haader
