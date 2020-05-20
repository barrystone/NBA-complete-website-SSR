import React from "react";
import Link from "next/link";

const TeamsNav = ({ divsData }) => {
  const divs = divsData.map((item) => Object.keys(item)[0]);

  return (
    <div className="TeamsNav-wrap">
      <nav className="TeamsNav-nav">
        <ul>
          {divs.map((divs) => {
            return (
              <li key={divs}>
                <Link href={`/standings/[title]`} as={`/standings/${divs}`}>
                  <a>{divs}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default TeamsNav;
