import React, {useEffect, useState} from 'react'
// import { Link} from 'react-router-dom';
import CardProduct from '../components/CardProducts'
const Home = () => {
const [stateProduct, setstateProduct] = useState(null)


useEffect(() => {
  
  
    const getProduct = async () => {
            
      const data = await window.fetch(`http://localhost:5000/api/products`)
  
      const product = await data.json()
      setstateProduct(product)
      console.log(product);
      
    
    }

    getProduct();  


}, [])


  return (

    <div className="test flex-justify-content-center" >

      {stateProduct && stateProduct.map(product =>
     
        
           <CardProduct 
          key={product._id}
          name={product.name}
          price={product.price}
          id={product._id}
        />
      ) 

      } 


    </div>
        
  )
}



export default Home ;

