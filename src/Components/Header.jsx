import React from 'react';
import '../css/Header.css';

const Header = () => {
  let date = new Date();
  let current_date =
    date.getDate() +
    '-' +
    date.getMonth().toString().padStart(2, '0') +
    '-' +
    date.getFullYear();
  return (
    <div className="header">
      <nav id="navbar">
        <p id="main-logo">The Gradebook</p>
        <p id="current-date">{current_date}</p>
      </nav>
      <div id="header-content">
        <p>University: Lovely Professional University</p>
        <p>Department: CSE</p>
        <p>Title: Front End</p>
        <p>Professor: Mir Junaid Rasool</p>
        <p>Group: K19FE</p>
        <p>Semester: 8</p>
      </div>
    </div>
  );
};

export default Header;
