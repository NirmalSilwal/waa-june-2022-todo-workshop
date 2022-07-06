import React from "react";
import { Route, Routes } from "react-router";
import User from "../todo/User";
import Todos from "../todo/Todos";
import DetailToDo from "../todo/DetailToDo";

export default function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/todos" element={<Todos> </Todos>} />
        <Route path="/todos/:id" element={<DetailToDo />} />
        {/* <Route path="/users" element={<User />} /> */}
      </Routes>
    </div>
  );
}
