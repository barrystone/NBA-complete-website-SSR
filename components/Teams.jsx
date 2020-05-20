import TeamsCharts from "./TeamsCharts";
import PlayerSlick from "./PlayerSlick";

import GreekFreakImg from "./Teams-Components/greekFreakImg";

const Teams = (props) => {
  const { data } = props;

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "yellow" }}>
        <div>
          <h1>Home</h1>
          <div>
            <GreekFreakImg />
          </div>
          <TeamsCharts data={data} />
          <PlayerSlick />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Teams;
