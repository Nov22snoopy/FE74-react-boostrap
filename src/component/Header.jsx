import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-1">
          <div className="container">
            <a className="navbar-brand" href="./../../public/index.html">
            Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="./../../public/index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./../../public/index.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./../../public/index.html">
                    Serivce
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./../../public/index.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
