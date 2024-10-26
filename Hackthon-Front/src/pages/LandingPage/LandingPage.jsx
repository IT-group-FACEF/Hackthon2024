import HeaderPage from "../LandingPage/HeaderPage";
import Home from "./Home";
import Unlock from "./Unlock.jsx";
import Achievements from "./Achievements.jsx";
import Calendar from "./Calendar.jsx";
import Caring from "./Caring.jsx";
import Footer from "../LandingPage/Footer";

function HomePage() {
  return (
    <div>
      <HeaderPage />
      <Home />
      <Unlock />
      <Achievements />
      <Calendar />
      <Caring />
      <Footer />
    </div>
  );
}

export default HomePage;
