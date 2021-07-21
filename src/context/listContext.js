import React, { createContext, useState } from 'react'

export const listContext = createContext()
const ListContextProvider = (props) => {

    const [list, setList] = useState([])
    const datas = [list, setList]
    
    return (
        <listContext.Provider value={datas}>
            {props.children}
        </listContext.Provider>
    )
}

export default ListContextProvider
