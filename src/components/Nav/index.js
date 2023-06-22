"use client";
import React from "react";
import { navLinks } from "./../../utils/data";

export default function NavBar() {
  return (
    <div>
      <div className="checkbox-container">
        <div className="checkbox-wrapper">
          <input type="checkbox" id="toggle" />
          <label className="checkbox" htmlFor="toggle">
            <div className="trace"></div>
            <div className="trace"></div>
            <div className="trace"></div>
          </label>
          <div className="menu"></div>
          <nav className="menu-items">
            <ul>
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.path}>{link.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
