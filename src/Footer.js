import React, { useState } from 'react';
import './css/Footer.css';

const Footer = () => {
  const date = new Date();
  const [currentTime, setCurrentTime] = useState();
  const currentDate =
    date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

  setTimeout(() => {
    let tempTime =
      date.getHours().toString().padStart(2, '0') +
      ':' +
      date.getMinutes().toString().padStart(2, '0') +
      ':' +
      date.getSeconds().toString().padStart(2, '0');
    setCurrentTime(tempTime);
  }, 1000);

  return (
    <div className="footer">
      <div className="signature">signature</div>
      <div className="date">
        {currentDate}
        <span>{currentTime}</span>
      </div>
    </div>
  );
};

export default Footer;
