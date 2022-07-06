import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import axios from "axios";

export default function Todos() {
  const [todoState, setTodoState] = useState([]);

  const fetchTodos = async () => {
    const result = await axios.get("http://localhost:8080/todos");
    setTodoState(result.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todoState.map((item) => {
        return <Todo title={item.title} key={item.id} />;
      })}
    </div>
  );
}
