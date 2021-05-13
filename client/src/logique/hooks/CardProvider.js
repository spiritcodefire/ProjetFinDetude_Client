import React, {useState} from 'react'

export const CartContext = React.createContext()

function getCartFromLocalStorage() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
}



const ContextProvider = (props) => {
    const {children} = props
    const [cart, setCart] = React.useState(getCartFromLocalStorage());
    const [contextCard, setContextCard] = useState([])

    const context = {
        contextCard,
        setContextCard
    }

    const AugmenterLeMontantTotal = id => {
        const newCart = [...cart].map(item => {
          return item.id === id
            ? { ...item, amount: item.amount + 1 }
            : { ...item };
        });
        setCart(newCart);
      };

    const addToCart = product => {
        const { id, image, title, price } = product;
        const item = [...cart].find(item => item.id === id);
    
        if (item) {
          AugmenterLeMontantTotal(id);
          return;
        } else {
          const newItem = { id, image, title, price, amount: 1 };
          const newCart = [...cart, newItem];
          setCart(newCart);
        }
      };



    return (
        <CartContext.Provider value={context, addToCart, AugmenterLeMontantTotal}>
            {children}
        </CartContext.Provider>
    )
}

export default ContextProvider
