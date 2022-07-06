import React from "react";
import { useNavigate } from "react-router";

export default function Todo(props) {
    const navigate = useNavigate();

    const onClicked = (id) => {
        console.log(id);
        navigate("todos" + id);
    }
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
