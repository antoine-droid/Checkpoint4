import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const RegistrationContext = createContext();

export function RegistrationContextProvider({ children }) {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [name, setName] = useState(localStorage.getItem("user"));
 

  const values = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      user,
      setUser,
      name, 
      setName
       }),
       [
      email,
      setEmail,
      password,
      setPassword,
      user,
      setUser,
      name, 
      setName
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