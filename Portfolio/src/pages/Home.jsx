import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>

      <div className="bg-soft-white pt-30 border border-soft-white" >
        <Portfolio />

      </div>
      <div style={{ background: "rgb(26, 57, 106)" }}>
        <WorkTogether />
      </div>
      <div className="bg-soft-white ">
        <Profession />
      </div>
      <div className="mt-5 border border-white">
        <Testimonial />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
