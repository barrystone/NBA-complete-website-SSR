import React from "react";
import Link from "next/link";
const logoImg = require("../../assets/images/header/nba-logo.png");
const headerStoreImg = require("../../assets/images/header/header-store.png");
const headerUserImg = require("../../assets/images/header//header-user.png");

const mainHeader = () => {
  return (
    <div className="mainHeader">
      <nav className="mainHeader-nav">
        <div className="mainHeader-nav-left-container">
          <Link href="/">
            <a>
              <img
                src={logoImg}
                className="mainHeader-nav-left-container-logoImg"
              />
            </a>
          </Link>
        </div>
        <div className="mainHeader-nav-center-container">
          <ul>
            <li>
              <a href="">
                <div>SCORES</div>
              </a>
            </li>
            <li>
              <a href="">
                <div>SCHEDULE</div>
              </a>
            </li>
            <li>
              <Link href="/standings">
                <a>
                  <div>STANDINGS</div>
                </a>
              </Link>
            </li>
            <li>
              <a href="">
                <div>NEWS</div>
              </a>
            </li>
            <li>
              <a href="">
                <div>TEAMS</div>
              </a>
            </li>
            <li>
              <a href="">
                <div>VIDEO</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="mainHeader-nav-right-container">
          <div className="mainHeader-nav-right-container-box">
            <img
              className="mainHeader-nav-right-container-box-storeImg"
              src={headerStoreImg}
            ></img>
            <img
              className="mainHeader-nav-right-container-box-userImg"
              src={headerUserImg}
            ></img>
          </div>
        </div>
      </nav>
      <div className="mainHeader-line"></div>
    </div>
  );
};

export default mainHeader;
