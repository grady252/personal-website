import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./screens/Home";
import Project from "./screens/Project";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";
import Navigation from "./compomnents/Navigation/Navigation";
function App() {
  return (
    <div>
      <Row>
        <Navigation/>
      </Row>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="project" element={<Project/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
    
  );
}

export default App;
