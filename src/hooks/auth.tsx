/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useMemo } from "react"
import { IUser } from "../interfaces/user"
import { useLocalStorage } from "./localStorage"

interface AuthProviderProps {
  children: React.ReactNode
}

interface ILoginProps {
  user: IUser
  token: string
}
const AuthContext = createContext({});

function AuthProvider ({ children }: AuthProviderProps) {
  const [user, setUser] = useLocalStorage({defaultValue: null, key: "user"})
  const [token, setToken] = useLocalStorage({defaultValue: null, key: "token"})
  

  function login ({user, token}: ILoginProps) {
    setUser(user)
    setToken(token)    
  }

  function logout () {
    setUser(null)
    setToken(null)    
  }

  const value = useMemo(
    () => ({
      user, token, login, logout
    } ), 
    [user, token]
  )  

  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
}

function useAuth (): any {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth }
