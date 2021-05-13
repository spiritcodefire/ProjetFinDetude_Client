import React from 'react'
import { CartContext } from '../logique/hooks/CardProvider'
import UrlServer from '../utils/UrlServer'


const ProductDetail = (props) => {
    const { addToCart } = React.useContext(CartContext)

const [stateProductbyId, SetstateProductbyId] = React.useState(null)
// const [values, setValues] = React.useState([])

    var paramsId = props.match.params.id
    React.useEffect(() => {
  
  
        const getProductbyId = async () => {
                
          const data = await window.fetch(`${UrlServer}/api/product/${paramsId}`)
      
          const product = await data.json()
          console.log(product);
         
        SetstateProductbyId(product)
        
        }
    
        getProductbyId();  
    
    
    }, [])

console.log(stateProductbyId);

    

    return (
        <div className="border border-dark shadow-lg" style={{height: "500px"}}>
            <div className="" style={{textAlign: "center"}}>
                    {stateProductbyId &&
                stateProductbyId._id}
                    <br />
                    <br />

                {stateProductbyId &&
                stateProductbyId.category}

                    <br />
                    <br />

                {stateProductbyId &&
                stateProductbyId.name}

                    <br />
                    <br />

                {stateProductbyId &&
                stateProductbyId.price}

                    <br />
                    <br />
                    {stateProductbyId &&
                stateProductbyId.image}
                    <br />
                    <br />
                

                <button onClick={() => {
                    addToCart(stateProductbyId);
                }}>ajouter au panier</button>

            </div>
        </div>
    )
}

export default ProductDetail
