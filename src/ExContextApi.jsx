import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


// Create the context
export const ThemeContext = createContext();


const ExContextApi = ({children}) => {
  const [theme,setTheme] = useState("light");

  const toggleTheme = () =>{
    setTheme(prevThem => (prevThem === 'light' ? 'dark' : 'light'));
  };

     return (
        <>
            <ThemeContext.Provider value={{theme,toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ExContextApi
