import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Users from "./pages/Users";
import About from "./pages/About";
import UserPosts from "./pages/User-Posts";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element ={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="users/:userId" element={<UserPosts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
