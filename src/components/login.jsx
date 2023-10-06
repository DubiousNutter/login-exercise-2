import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "123" && password === "123") {
      onLogin();
    }
  };

  return (
    <div>
      <div style={{ marginTop: "10vh" }}>
        <div>
          <input
            type="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div style={{ marginTop: "4vh", marginBottom: "5vh" }}>
        <Button
          outline
          type="button"
          class="btn btn-info"
          onClick={handleLogin}
        >
          submit
        </Button>
      </div>
    </div>
  );
}

export default Login;
