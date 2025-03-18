import React, { useState } from "react";
import { createContext } from "react";
import Home from "./Home";
import About from "./About";

export const UserProvider = createContext();

// authentication provider
const AuthContext = createContext();

const ContextApi = () => {
  const [color, setColor] = useState(false);

  const [user, setUser] = useState(null);

  // login function
  const login = (userData) => setUser(userData);

  // logout function
  const logout = () => setUser(null);

  let name = "Rohan das";
  let age = 25;
  let information = {
    city: "mumbai",
    is_login: true,
    username: "rohan@123",
    password: "12345",
  };


  return (
    <>
      <UserProvider.Provider
        value={{ name, age, information, color, setColor ,login,logout,user }}
      >
        <Home />
        <About />
      </UserProvider.Provider>
    </>
  );
};

export default ContextApi;
