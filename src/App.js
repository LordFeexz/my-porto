import "./App.css";
import Navigationbar from "./components/navigationbars";
import "./style/LandingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      {/*intro section*/}
      <div className="myBG">
        <Navigationbar />
        <Intro />
      </div>
      {/*end of intro*/}
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
