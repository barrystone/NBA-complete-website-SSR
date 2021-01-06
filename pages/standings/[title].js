import TeamsNav from "../../components/TeamsNav";
import TeamsDiv from "../../components/TeamsDiv";
import TeamPage from "../../components/TeamPage";
import MainHeader from "../../components/layout/mainHeader";

import { useRouter } from "next/router";
import fs from "fs";

import { useSelector } from "react-redux";
import WaveLoading from "@bit/akameco.styled-spinkit.wave-loading";

const divPage = ({ data, divsData }) => {
  const { routerLoading } = useSelector((state) => state.router);

  const router = useRouter();
  const { title } = router.query;

  let isDiv = false;
  divsData.map((items) => {
    if (Object.keys(items)[0].includes(title)) {
      isDiv = true;
    }
  });
  if (isDiv) {
    const divData = divsData.filter((c) => Object.keys(c) == title);
    const teams = Object.values(divData[0])[0];
    return (
      <React.Fragment>
        <header>
          <MainHeader />
          <TeamsNav divsData={divsData} />
        </header>
        <main>
          {routerLoading ? (
            <WaveLoading />
          ) : (
            <div>
              <div>{title}</div>
              <TeamsDiv teams={teams} />
            </div>
          )}
        </main>
      </React.Fragment>
    );
  } else {
    let isTeam = false;
    divsData.map((items) =>
      // Object.values(items).map((item) => item.map((team) => console.log(team)))
      {
        if (Object.values(items).map((item) => item.includes(title))) {
          isTeam = true;
        }
      }
    );
    if (isTeam) {
      return (
        <React.Fragment>
          <header>
            <MainHeader />
            <TeamsNav divsData={divsData} />
          </header>
          <main>
            {routerLoading ? (
              <WaveLoading />
            ) : (
              <div>
                <div>{title}</div>
                <TeamPage data={data} />
              </div>
            )}
          </main>
        </React.Fragment>
      );
    } else {
      return <div>Page not found 404</div>;
    }
  }
};
export async function getStaticPaths() {
  const divsData = JSON.parse(
    fs.readFileSync(`${process.cwd()}/_data/divsData.json`, "utf-8")
  );
  // For the deal with this (let allPaths every element is part of * one * array), I took more than 1 hour.
  const allPaths = [
    ...divsData.map((items) => Object.keys(items)[0]),
    ...divsData
      .map((items) => Object.values(items)[0])
      .toString()
      .split(","),
  ];

  const paths = allPaths.map((team) => ({
    params: { title: team },
  }));
  return {
    paths,
    // paths: [{ params: { title: "Atlantic" } }, { params: { title: "Central" } }],
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const teamName = params.title;
  const api = {
    key: "bc5009f7498a4e8cac246d6fbdd34692",
    base: "https://api.sportsdata.io/v3/nba/scores/json/Standings/2021",
  };
  const data = await fetch(`${api.base}?key=${api.key}`)
    .then((response) => response.json())
    .then((result) => {
      // return result;
      const team = result.filter((c) => c.Name === teamName);
      let items = { item: { ...team[0] } };
      const stats = items.item;
      return stats;
    });

  const divsData = JSON.parse(
    fs.readFileSync(`${process.cwd()}/_data/divsData.json`, "utf-8")
  );

  return {
    props: {
      data,
      divsData,
    },
  };
}
export default divPage;
