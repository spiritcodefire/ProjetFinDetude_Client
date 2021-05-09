import React from 'react'




const ProductDetail = (props) => {
const [stateProductbyId, SetstateProductbyId] = React.useState(null)

    var paramsId = props.match.params.id
    React.useEffect(() => {
  
  
        const getProductbyId = async () => {
                
          const data = await window.fetch(`http://localhost:5000/api/product/${paramsId}`)
      
          const product = await data.json()
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
                

                <button >ajouter au panier</button>

            </div>
        </div>
    )
}

export default ProductDetail
