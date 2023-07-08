import { createContext } from "react";

export const UserDataContext = createContext();
export default function UserDataContextProvider({children}){
    return(
        <UserDataContext.Provider>
            {children}
        </UserDataContext.Provider>
    )
}