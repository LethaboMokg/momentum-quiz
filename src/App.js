import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Loginform from "./Pages/loginform";
import Quiz from "./Pages/Quiz";
import SocialShare from "./Pages/SocialShare";
import Thanks from "./Pages/thanks";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path = "/SocialShare" element ={<SocialShare/>}/>
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

    

export default App;
