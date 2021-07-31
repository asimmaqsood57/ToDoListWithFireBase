import React from "react";

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      window.M.toast({
        html: `Welcome , ${result.user.email}`,
        classes: "green",
      });
      history.push("/");
    } catch (error) {
      window.M.toast({
        html: error.message,
        classes: "green",
      });
    }
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
