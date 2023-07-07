import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Pages/Overview";
import Users from "./Pages/Users";
import Revenue from "./Pages/Revenue";
import Reports from "./Pages/Reports";
import Report1 from "./Pages/Report1";
import Report2 from "./Pages/Report2";
import Report3 from "./Pages/Report3";
import Products from "./Pages/Products";
function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Overview></Overview>}></Route>
        <Route path="/overview" element={<Overview></Overview>}></Route>
        <Route path="/overview/users" element={<Users></Users>}></Route>
        <Route path="/overview/revenue" element={<Revenue />}></Route>
        <Route path="/reports" element={<Reports></Reports>}></Route>
        <Route path="/reports/report1" element={<Report1></Report1>}></Route>
        <Route path="/reports/report2" element={<Report2></Report2>}></Route>
        <Route path="/reports/report3" element={<Report3></Report3>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
