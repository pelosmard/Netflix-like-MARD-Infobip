import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { MdDarkMode } from "react-icons/md";
import { SiThemoviedatabase } from "react-icons/si";
import { BiCameraMovie, BiAperture } from "react-icons/bi";

function Navbar(props) {
  return (
    <>
      {" "}
      <div
        className="container-fluid text-light"
        style={{ backgroundColor: "#1e272e" }}
      >
        <div className="container  text-light">
          <header className="p-3 mb-3 border-bottom">
            <div className="container">
              <div className="d-flex flex-wrap align-items-start justify-content-between">
                <div className="d-flex link-light text-light">
                  <Link
                    to=""
                    className="nav-link px-2 justify-content-start link-light"
                  >
                    {" "}
                    <BiAperture /> Inicio
                  </Link>
                  <Link to="popular" className="nav-link px-2 link-light">
                    {" "}
                    Populares
                  </Link>
                  <Link to="toprated" className="nav-link px-2 link-light">
                    Más valorados
                  </Link>
                </div>
                <div><img src="NetflixLogo.jpg" alt="Netflix"></img></div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default Navbar;
