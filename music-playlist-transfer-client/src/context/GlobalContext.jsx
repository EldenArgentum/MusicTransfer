import React, { createContext, useState } from "react"

const GlobalContext = createContext()

export const GlobalContextProvider = (props) => {

    const { children } = props
    const [count, setCount] = useState(0)

    const state = {
        count,
        setCount
    }

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
  )
}

export const useCount = () => React.useContext(GlobalContext).count
export const useSetCount = () => React.useContext(GlobalContext).setCount
