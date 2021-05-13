import React, {useState} from 'react'

export const ContextUser = React.createContext()

const UserProvider = (props) => {
    const {children} = props

    const [contextUser, setContextUser] = useState()

    const Usercontext = {
        contextUser,
        setContextUser
    }

    return (
        <ContextUser.Provider value={Usercontext}>
            {children}
        </ContextUser.Provider>
    )
}

export default UserProvider
