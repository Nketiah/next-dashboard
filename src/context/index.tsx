"use client"
import { createContext, useContext, useMemo, useState } from "react"



export const StateContext = createContext({})

export const StateProvider = ({ children }: any): any => {

    const [isMobile, setIsMobile] = useState(false)
    const [hideSidebar, setHideSideBar] = useState(false)

    const values = {
        hideSidebar, setHideSideBar,
        isMobile, setIsMobile
    }


    const memoValues = useMemo(
        () => values,
        [
            hideSidebar, setHideSideBar,
            isMobile, setIsMobile
        ]
    )

    return (
        <StateContext.Provider value={memoValues}>
            {children}
        </StateContext.Provider>
    )
}


// Create a custom hook to access context
export function useMainStateProvider() {
    return useContext(StateContext)
}
