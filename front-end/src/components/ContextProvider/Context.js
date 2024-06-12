import React from "react";
import { useState, createContext } from "react";

export const LoginContext = createContext("");

function Context({ children }) {
  const [loginData, setLoginData] = useState("");
  return (
    <>
      <LoginContext.Provider value={{ loginData, setLoginData }}>
        {children}
      </LoginContext.Provider>
    </>
  );
}

export default Context;
