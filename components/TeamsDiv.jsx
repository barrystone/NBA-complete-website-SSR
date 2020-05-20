import React from "react";
import Link from "next/link";

const TeamsDiv = ({ teams }) => {
  return (
    <React.Fragment>
      <nav className="TeamsDivNav-wrap">
        <ul>
          {teams.map((team) => {
            return (
              <li key={team}>
                <Link href={"/standings/[title]"} as={`/standings/${team}`}>
                  <a>
                    <div>{team}</div>
                  </a>
                </Link>
              </li>
            );
          })}
          <li>
            <Link href={"/standings"}>
              <a>
                <div>Back to Standings</div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default TeamsDiv;
