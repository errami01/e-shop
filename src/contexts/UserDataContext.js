import { createContext, } from "react";
import { useUserState } from "../utils/useUserState"

export const UserDataContext = createContext();
export default function UserDataContextProvider({children}){
    const [userData, setUserData] = useUserState(()=>JSON.parse(localStorage.getItem('user')))
    return(
        <UserDataContext.Provider value={{userData, setUserData}}>
            {children}
        </UserDataContext.Provider>
    )
}