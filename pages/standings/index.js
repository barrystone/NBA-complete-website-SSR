import fs from "fs";
import TeamsNav from "../../components/TeamsNav";
import Teams from "../../components/Teams";
import MainHeader from "../../components/layout/mainHeader";

import { useSelector } from "react-redux";
import WaveLoading from "@bit/akameco.styled-spinkit.wave-loading";

const Standings = ({ data, divsData }) => {
  const { loading } = useSelector((state) => state.loading);

  return (
    <React.Fragment>
      <header>
        <MainHeader />
        <TeamsNav divsData={divsData} />
      </header>
      <main>{loading ? <WaveLoading /> : <Teams data={data} />}</main>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const api = {
    key: "bc5009f7498a4e8cac246d6fbdd34692",
    base: "https://api.sportsdata.io/v3/nba/scores/json/Standings/2020",
  };
  const data = await fetch(`${api.base}?key=${api.key}`)
    .then((response) => response.json())
    .then((result) => {
      return result;
      console.log(result);
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

export default Standings;
