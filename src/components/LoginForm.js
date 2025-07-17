import React from "react";
import { useState } from "react";

function LoginForm() {
  const [email, setUsername] = useState();
  const [password, setPassword] = useState();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN5Odz2EokBzEiDgtmPuWn_tz4toWipIQ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Authentication failed!");
      }

      console.log("Login success:", data);
      // Redirect or store token here
    } catch (err) {
      console.error("Login error:", err.message);
      // Show error to user via state
    }
  };

  return (
    <div className="Login-form">
      <form onSubmit={submithandler}>
        <label>username</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
