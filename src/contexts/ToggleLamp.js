import { createContext, useContext } from "react";

export const ToggleLampContext = createContext({
    lightStatus : false,
    changeLightStatus : () => {}
})

export const ToggleLampProvider = ToggleLampContext.Provider

export default function useToggleLamp(){
    return useContext(ToggleLampContext)
}