import React from 'react'
import { Link } from 'react-router-dom';

const CardProducts = (props) => {
    return (
        <div>
            <Link to={'/bigproduct/'+props.id}>
                <div>{props.name}</div>
                <div>{props.category}</div>
                <div>{props.price}</div>
            </Link>
            
        </div>
    )
}

export default CardProducts
