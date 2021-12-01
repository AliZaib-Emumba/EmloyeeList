import React, { useState} from "react" ; 

const User = React.createContext<any>({}) ; 

export const UserIdProvider: React.FC = ({children}) => {
    const [userId , setUserId] = useState<string>("") ; 

    return (
        <User.Provider value={{userId , setUserId}}>
            {children}
        </User.Provider>
    )
}
export default User ; 
