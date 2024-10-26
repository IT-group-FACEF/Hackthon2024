import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage.jsx";
import Login from "../pages/Auth/Login";
import RegisterEmp from "../pages/Auth/RegisterEmp.jsx";
import RegisterUsuario from "../pages/Auth/RegisterUsuario.jsx";
import DashboardUser from "../pages/interfaces/DashboardUser.jsx";
import DashboardCompany from "../pages/interfaces/DashboardCompany.jsx";
import Quests from "../pages/Quests/Quest.jsx";
import QuestsUser from "../pages/Quests/QuestUser.jsx";
import Users from "../pages/Perfil/Users.jsx";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registerCompany" element={<RegisterEmp />}></Route>
        <Route path="/registerUser" element={<RegisterUsuario />}></Route>
        <Route path="/dashboard" element={<DashboardCompany />}></Route>
        <Route path="/dashboardUser" element={<DashboardUser />}></Route>
        <Route path="/quests" element={<Quests />}></Route>
        <Route path="/questsUser" element={<QuestsUser />}></Route>
        <Route path="/Users" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
