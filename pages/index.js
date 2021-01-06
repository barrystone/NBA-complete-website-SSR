import MainHeader from "../components/layout/mainHeader";

import { useSelector } from "react-redux";
// import Loading from "../components/Loading";
import WaveLoading from "@bit/akameco.styled-spinkit.wave-loading";

function App() {
  const { routerLoading } = useSelector((state) => state.router);

  return (
    <React.Fragment>
      <header>
        <MainHeader />
      </header>
      <main>
        {routerLoading ? (
          // <Loading />
          <WaveLoading />
        ) : (
          ""
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
