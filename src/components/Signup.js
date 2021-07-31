import React from "react";

import { auth } from "../firebase";

import { useState } from "react";

import { useHistory } from "react-router-dom";

export default function Signup() {
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
    <div className="center container">
      <h3>Please Signup</h3>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field">
          <input
            placeholder="Enter Your email"
            id="email"
            type="email"
            className="validate"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Enter Your Password"
            id="password"
            type="password"
            className="validate"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn red">
          Signup
        </button>
      </form>
    </div>
  );
}
