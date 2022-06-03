import { createContext, useState } from "react";


export const appContext = createContext();

export const AppContextProvider = ({children}) => {

    const [count,setCount] = useState(0);
    const handleCount = (value) => {
        setCount(count + value);
    }

    return(
        <div>
            <appContext.Provider value = {{count, handleCount}}>{children}</appContext.Provider>
        </div>
    )
}