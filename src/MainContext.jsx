import { createContext, useState } from "react"

export const MainContext = createContext()

export function MainProvider({ children }){
    const [items, setItems] = useState(0)

    const addNumber = () => {
        setItems(items + 1)
    }

    return(
        <MainContext.Provider value={{ items, addNumber }}>
            {children}
        </MainContext.Provider>
    )
}