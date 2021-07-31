import React from "react";

import { useState } from "react";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div class="center container">
      <h3>Please Login</h3>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="input-field">
          <input
            placeholder="Enter Your email"
            id="email"
            type="email"
            class="validate"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div class="input-field">
          <input
            placeholder="Enter Your Password"
            id="password"
            type="password"
            class="validate"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn red">
          Login
        </button>
      </form>
    </div>
  );
}
