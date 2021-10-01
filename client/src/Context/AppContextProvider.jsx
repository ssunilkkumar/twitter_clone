import React, {createContext, useState} from 'react'
import { v4 as uuid } from 'uuid';


export const AppContext = createContext(); 

export const AppContextProvider = ({children}) => {
    const [mySize, setMySize] = useState("m")

    const handleCartitem= async() => {
        console.log("handleCartitem")
    }

    const handleAddCart = async (value) => {
    }

    

    
    const value = {
        handleCartitem,
        handleAddCart,
        mySize
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}