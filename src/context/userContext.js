import React, { createContext, useState } from 'react'

export const userContext = createContext()
const UserContextProvider = (props) => {

    const [user, setUser] = useState('')
    const datas = [user, setUser]
    return (
        <userContext.Provider value={datas}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContextProvider
