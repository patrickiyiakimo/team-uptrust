import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import KeyFeatures from "./KeyFeatures";
import MeetOurTeam from "./MeetOurTeam";
import Navbar from "./Navbar";
import OurStory from "./OurStory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Icon from "./Icon";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Education from "./Education";
import Socials from "./Socials";
import Addresses from "./Addresses";
import LogIn from "./LogIn";
import Output from "./Output";
import LearnMore from "./LearnMore";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/Output">
            <Output />
          </Route>
          <Route path="/LearnMore">
            <LearnMore />
          </Route>
          <Route path="/GetStarted">
            <Profile />
          </Route>
          <Route path="/icon">
            <Icon />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/experiences">
            <Experiences />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/Socials">
            <Socials />
          </Route>
          <Route path="/Addresses">
            <Addresses />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Header />
            <div className="hero">
              <Hero />
            </div>
            <div className="keyfeatures">
              <KeyFeatures />
            </div>
            <div className="ourstory">
              <OurStory />
            </div>
            <div className="meetourteam">
              <MeetOurTeam />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
