import React from "react";
const currentDate = new Date();
const Footer = () => {
  return <p className="text-sm py-2">{currentDate.getFullYear()} © Try Krisna</p>;
};

export default Footer;
