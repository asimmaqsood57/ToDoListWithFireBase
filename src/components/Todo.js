import React from "react";
import { db } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";

import { useHistory } from "react-router";
export default function Todo({ user }) {
  const [text, setText] = useState("");

  const [mytodos, setmytodos] = useState([]);

  const history = useHistory();
  useEffect(() => {
    if (user) {
      const docRef = db.collection("todos").doc(user.uid);
      docRef.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          console.log(docSnap.data().todos);
          setmytodos(docSnap.data().todos);
        } else {
          console.log("no docs exists");
        }
      });
    } else {
      history.push("/login");
    }
  }, []);
  const addTodo = () => {
    db.collection("todos")
      .doc(user.uid)
      .set({
        todos: [...mytodos, text],
      });
  };
  const deleteTodo = (deleteTodo) => {
    const docRef = db.collection("todos").doc(user.uid);
    docRef.get().then((docSnap) => {
      const result = docSnap.data().todos.filter((todo) => todo !== deleteTodo);

      docRef.update({
        todos: result,
      });
    });
  };
  return (
    <div className=" container">
      <h1>Add Todos</h1>
      <div class="input-field">
        <input
          placeholder="Enter Your Todo"
          id="text"
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          class="validate"
        />
      </div>
      <button onClick={() => addTodo()} className="btn blue">
        Add
      </button>

      <ul className="collection">
        {mytodos.map((todo) => {
          return (
            <li className="collection-item" key={todo}>
              {todo}

              <i class="material-icons right" onClick={() => deleteTodo(todo)}>
                delete
              </i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
