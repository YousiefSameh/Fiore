import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";

const App = () => {
	return (
		<Router>
      <Routes>
        <Route path="/" exact Component={HomePage}/>
        <Route path="/Login" Component={Login} />
      </Routes>
    </Router>
	);
};

export default App;
