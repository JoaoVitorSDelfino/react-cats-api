import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Login from "./components/Login"
import MainMenu from "./components/MainMenu"
import CreateCat from "./components/CreateCat"
import SearchCat from "./components/SearchCat"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainMenu" element={<MainMenu />} />
          <Route path="/createCat" element={<CreateCat />} />
          <Route path="/searchCat" element={<SearchCat />} />
        </Routes>
      </Router>
  );
}

export default App;