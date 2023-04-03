import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Routing from "./components/Routing"

function App() {

  return (
       <main>
      <BrowserRouter>
      <Routing />
    </BrowserRouter>
    </main>
  )
}

export default App
