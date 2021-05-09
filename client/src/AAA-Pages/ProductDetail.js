import React from 'react'




const ProductDetail = (props) => {
const [stateProductbyId, SetstateProductbyId] = React.useState(null)

    var paramsId = props.match.params.id
    React.useEffect(() => {
  
  
        const getProductbyId = async () => {
                
          const data = await window.fetch(`http://localhost:5000/api/product/${paramsId}`)
      
          const product = await data.json()
          SetstateProductbyId(product)
          console.log(product);
          
        
        }
    
        getProductbyId();  
    
    
    }, [])

    
console.log(stateProductbyId);
    return (
        <div>
            <div className="" style={{textAlign: "center"}}>
                
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

            </div>
        </div>
    )
}

export default ProductDetail
