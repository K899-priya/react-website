import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import EmployeeTable from "./components/content/EmployeeTable";
import Calander from "./components/content/Calander";
import Statistic from "./components/content/Statistic";

function App() {
   

  return (
    <Router>
      <Header />
      <div className="flex bg-gray-50">
        <SideBar />
        <main className="flex-1 p-6 bg-gray-50 ">
          <Routes>
            <Route path="/EmployeeTable" element={<EmployeeTable />} />
            <Route path="/Calander" element={<Calander />} />
            <Route path="/Statistic" element={<Statistic />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
