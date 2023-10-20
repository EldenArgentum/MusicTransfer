import React, { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalContextProvider = (props) => {

    const { children } = props
    const [token, setToken] = useState("")
    const [count, setCount] = useState(0)

    const state = {
        token,
        setToken,
        count,
        setCount
    }

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
  )
}

export const useToken = () => React.useContext(GlobalContext).token
export const useSetToken = () => React.useContext(GlobalContext).setToken
export const useCount = () => React.useContext(GlobalContext).count
export const useSetCount = () => React.useContext(GlobalContext).setCount
