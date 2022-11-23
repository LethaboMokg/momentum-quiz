import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Loginform from "./Pages/loginform";
import Quiz from "./Pages/Quiz";
import SocialShare from "./Pages/SocialShare";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path = "/SocialShare" element ={<SocialShare/>}/>
      </Routes>
    </Router>
  );
}

    

export default App;
