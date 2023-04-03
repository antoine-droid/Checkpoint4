import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routing";
import { RegistrationContextProvider } from "./contexts/RegistrationContext";

function App() {

  return (
       <main>
      <BrowserRouter>
      <RegistrationContextProvider>
      <Routing />
      </RegistrationContextProvider>
    </BrowserRouter>
    </main>
  )
}

export default App
