import React, { createContext, useEffect, useState } from 'react'

export const listContext = createContext()
const ListContextProvider = (props) => {

    const [list, setList] = useState([])
    const datas = [list, setList]
    useEffect(()=>{
        if(list.length > 0){
            localStorage.setItem('list', JSON.stringify(list))
        }
        else if(list.length === 0){
            localStorage.removeItem('list')
        }
        else{
            let initList = JSON.parse(localStorage.getItem('list'))
            if(initList && initList.length){
                setList(initList)
            }
        }
        
    }, [list])
    return (
        <listContext.Provider value={datas}>
            {props.children}
        </listContext.Provider>
    )
}

export default ListContextProvider
