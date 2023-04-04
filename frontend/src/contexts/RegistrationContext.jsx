import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const RegistrationContext = createContext();

export function RegistrationContextProvider({ children }) {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [name, setName] = useState(JSON.parse(localStorage.getItem("user")));
   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user"));
   const [id, setId] = useState(localStorage.getItem("user"));
   const [newName , setNewName]= useState(localStorage.getItem(""));
  const [newEmail , setNewEmail]= useState(localStorage.getItem(""));
 

  const values = useMemo(
    () => ({newName , setNewName,newEmail , setNewEmail,
      email,
      setEmail,
      password,
      setPassword,
      user,
      setUser,
      name, 
      setName,
      isLoggedIn, 
      setIsLoggedIn,
      id, setId
       }),
       [newName , setNewName, newEmail , setNewEmail,
      email,
      setEmail,
      password,
      setPassword,
      user,
      setUser,
      name, 
      setName,
      isLoggedIn,
       setIsLoggedIn,id, setId

         ]
  );
    return (
    <RegistrationContext.Provider value={values}>{children}</RegistrationContext.Provider>
  );
}
RegistrationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useRegistrationContext = () => useContext(RegistrationContext);