import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import A from "./A";
import B from "./B";

function App() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location: ", location);

  const navigateTo = () => {
    navigate("/a?title=software&skills=undefined");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<button onClick={navigateTo}>Heheh</button>}
      ></Route>
      <Route path="/a" element={<A />}></Route>
      <Route path="/b" element={<B />}></Route>
    </Routes>
  );
}

export default App;
