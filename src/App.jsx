import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navber from "./components/Navber";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <Router>
      <Navber isAuth={isAuth}></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth}></CreatePost>}
        ></Route>
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth}></Login>}
        ></Route>
        <Route
          path="/logout"
          element={<Logout setIsAuth={setIsAuth}></Logout>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
