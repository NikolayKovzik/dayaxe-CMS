import React from "react";
import { NavLink } from "react-router-dom";
import RoutesList from "../../routes";
import "./style.scss";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <span>
        404 NOT FOUND. Back to{" "}
        <NavLink to={RoutesList.DEFAULT}>Home Page</NavLink>
      </span>
    </div>
  );
}

export default NotFoundPage;
