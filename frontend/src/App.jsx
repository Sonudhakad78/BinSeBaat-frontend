import React from "react";
import AllRoutes from "./components/Routes/AllRoutes";
import Navbar from "./components/Navbar";
import PostDetails from "./components/PostDetails";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
