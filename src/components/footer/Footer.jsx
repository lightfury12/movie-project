import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          <h1>  &#128522; <span> Powered by Arun Taak </span> &#128522; </h1><br/>
          Made with ❤️ using React & Tailwind. Movix helps you explore movies, shows, and entertainment content with ease.
        </div>
        <div className="socialIcons">
          <a href="https://instagram.com/arun___taak">
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://instagram.com/arun___taak">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://instagram.com/arun___taak">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
