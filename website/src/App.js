import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./compomnents/Navigation/Navigation";
import Constants from './constants/constants';
import { useScroll } from './hooks/scrollHook';


function App() {
  let scroll = useScroll();

  const display = () => {
    if (window.location.href === Constants.home && scroll < 750)
      return 'backgroundImage'
    else
      return 'backgroundImage blurred';
  }

  return (
    <div>
        <div className={display()}></div>
        <Navigation/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="projects" element={<Projects/>}/>
          </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
