import HeaderPage from "../LandingPage/HeaderPage";
import Home from "./Home";
// import Sponsors from "../LandingPage/Sponsors";
// import Community from "../LandingPage/Community.jsx";
import Unlock from "./Unlock.jsx";
import Achievements from "./Achievements.jsx";
import Calendar from "./Calendar.jsx";
// import Costumer from "./Costumer.jsx";
import Caring from "./Caring.jsx";
import Footer from "../LandingPage/Footer";

function HomePage() {
  return (
    <div>
      <HeaderPage />
      <Home />
      {/* <Sponsors /> */}
      {/* <Community /> */}
      <Unlock />
      <Achievements />
      <Calendar />
      {/* <Costumer /> */}
      <Caring />
      <Footer />
    </div>
  );
}

export default HomePage;
