import React from "react";
import { Link } from "react-router-dom";
import MyRoutes from "./MyRoutes";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}
