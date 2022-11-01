import Nav from "./component/Nav";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NavBottom from "./component/NavBottom";
function App() {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <NavBottom />
      </BrowserRouter>
    </div>
  );
}

export default App;
