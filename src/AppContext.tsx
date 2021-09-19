import React, { useContext } from 'react'
import { Recipe } from "./types";

type ContextType = {
    recipes: Recipe[]
}

type Props = {
    children: React.ReactNode;
} & ContextType

const appContextDefaultValues: ContextType = {
    recipes:[]
}

const Context = React.createContext<ContextType>(appContextDefaultValues)

export const useAppContext = () => {
    return useContext(Context)
}

export const ContextProvider = ({children, recipes}: Props) => {
    return (
        <>
            <Context.Provider value={{recipes}}>
                {children}
            </Context.Provider>
        </>
    );
}