import React, {useContext, useState} from 'react'

const AuthContext = React.createContext()
const AuthUpdateContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const useUpdateAuth = () => {
    return useContext(AuthUpdateContext)
}

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const authenticate = () => setIsAuthenticated(true)

    return (
        <AuthContext.Provider value={isAuthenticated}>
            <AuthUpdateContext.Provider value={authenticate}>
                {children}
            </AuthUpdateContext.Provider>            
        </AuthContext.Provider>
    )
}

