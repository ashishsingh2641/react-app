import React from "react";
import Hoc from "../Hoc/Hoc";
import SoberCarousel from "../components/SoberCarousel/SoberCarousel";
import CenteredTabs from "../components/CenteredTabs/CenteredTabs";

const Dashboard = () => {
  return (
    <div>
      <SoberCarousel />
      <div className="col-12" style={{ marginTop: "-120px" }}>
        <CenteredTabs />
      </div>
    </div>
  );
};

export default Hoc(Dashboard);
