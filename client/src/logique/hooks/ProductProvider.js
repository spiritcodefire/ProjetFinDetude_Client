import React, {useState} from 'react'

export const ContextProduct = React.createContext()

const ContextProvider = (props) => {
    const {children} = props

    const [contextProduct, setContextProduct] = useState([])

    const context = {
        contextProduct,
        setContextProduct
    }

    return (
        <ContextProduct.Provider value={context}>
            {children}
        </ContextProduct.Provider>
    )
}

export default ContextProvider
