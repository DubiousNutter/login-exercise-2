import React from "react";
import Login from "../components/login";
import InfoTable from "../components/infotable";
import { useState } from "react";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <div>
        <h2 style={{ marginTop: "2vh" }}>LOGIN</h2>
        <Login onLogin={handleLogin} />
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {isAuthenticated ? <InfoTable /> : null}
        </div>
      </div>
    </>
  );
}

export default Home;
