import MainHeader from "../components/layout/mainHeader";

import { useSelector } from "react-redux";
// import Loading from "../components/Loading";
import WaveLoading from "@bit/akameco.styled-spinkit.wave-loading";

function App() {
  const { loading } = useSelector((state) => state.loading);

  return (
    <React.Fragment>
      <header>
        <MainHeader />
      </header>
      <main>
        {loading ? (
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
