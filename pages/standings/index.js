// import fs from "fs";
import { useEffect } from "react";
import TeamsNav from "../../components/TeamsNav";
import Teams from "../../components/Teams";
import MainHeader from "../../components/layout/mainHeader";

import { useSelector, useDispatch } from "react-redux";
import WaveLoading from "@bit/akameco.styled-spinkit.wave-loading";

import { getStandings, standingRequest } from "../../store/standings";

import Router from "next/router";
import { loadingEnd } from "../../store/router";

// import configureStore from "../../store/configureStore";

import divsData from "../../_data/divsData.json";

const Standings = ({
  // divsData,
  standingsReload,
}) =>
  // { data, divsData }
  {
    const { routerLoading } = useSelector((state) => state.router);

    // const divsData = JSON.parse(
    //   fs.readFileSync(`${process.cwd()}/_data/divsData.json`, "utf-8")
    // );

    const dispatch = useDispatch();

    // console.log("standingsReload", standingsReload);
    // if (standingsReload) {
    //   Router.events.on("routeChangeStart", () => {
    //     dispatch(getStandings());
    //   });
    // }

    // if (standingsReload) {
    //   dispatch(getStandings());
    // }
    useEffect(() => {
      dispatch(standingRequest());
      dispatch(getStandings());
      // setTimeout(() => console.log("standings", standings), 3000);
    }, [routerLoading, standingsReload]);

    const { standings } = useSelector((state) => state.standings);

    // const divsData = JSON.parse(
    //   fs.readFileSync(`${process.cwd()}/_data/divsData.json`, "utf-8")
    // );

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
            <Teams
              data={
                // data
                standings
              }
            />
          )}
        </main>
      </React.Fragment>
    );
  };

export async function getStaticProps({ store, getStandings }) {
  // const api = {
  //   key: "bc5009f7498a4e8cac246d6fbdd34692",
  //   base: "https://api.sportsdata.io/v3/nba/scores/json/Standings/2020",
  // };
  // const data = await fetch(`${api.base}?key=${api.key}`)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     return result;
  //     console.log(result);
  //   });
  // const dispatch = useDispatch();
  // getStandings();

  let standingsReload = 1;
  // let standingsReload ? 0 : 1;
  // const store = configureStore();
  // const { dispatch } = store;
  // dispatch(getStandings());
  // store.dispatch(getStandings());
  // const divsData = JSON.parse(
  //   fs.readFileSync(`${process.cwd()}/_data/divsData.json`, "utf-8")
  // );
  return {
    props: {
      // data,
      // divsData,
      standingsReload,
    },
  };
}

// export async function getServerSideProps() {

// }

// Standings.getInitialProps = async ({ store }) => {
//   const { dispatch } = store;
//   dispatch(getStandings());
// };

export default Standings;
