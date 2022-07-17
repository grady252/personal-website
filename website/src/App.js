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
import { useEffect, useState } from "react";


function App() {
  let scroll = useScroll();
  const images = ['ocean.jpg', 'ocean2.jpg', 'savanah.jpg'];
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(images[getRandomInt(images.length)])
  }, [])

  const display = () => {
    if (window.location.href === Constants.home && scroll < 750)
      return 'backgroundImage'
    else
      return 'backgroundImage blurred';
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
        <div className={display()} style={{backgroundImage: "url(" + "images/"+ image + ")"}}></div>
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
