import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardList from "../CardList/CardList";
import Skeleton from "@mui/material/Skeleton";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  fetchData,
  getData,
} from "../../features/dashboard/dashboardSlice";

export default function CenteredTabs() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.dashboardData.counter);
  const flag = useSelector((state) => state.dashboardData.showSkeleton);
  const data = useSelector((state) => state.dashboardData.data);
  const data1 = useSelector((state) => state.dashboardData.data1);

  const [value, setValue] = React.useState(0);
  const mock = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    dispatch(fetchData());
    dispatch(getData());
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="PhotoShoot" />
        <Tab label="Galary" />
        <Tab label="Sales Products" />
      </Tabs>
      <div className="container">
        <div className="row">
          {/* <button onClick={() => dispatch(increment())}>
            {"counter:" + counter}
          </button> */}
          {value === 0 && (
            <>
              {data.map((item) => {
                return (
                  <>
                    {flag === true ? (
                      <CardList
                        bgImage={item?.bgImage}
                        text={item.text}
                        key={item.text}
                      />
                    ) : (
                      <div className="col-4 my-2">
                        <Skeleton
                          variant="rectangular"
                          width={210}
                          height={240}
                        />
                        <Skeleton width={210} />
                      </div>
                    )}
                  </>
                );
              })}
            </>
          )}
          {value === 1 && (
            <>
              {data1.map((item) => {
                return (
                  <>
                    {flag === true ? (
                      <CardList
                        bgImage={item?.bgImage}
                        text={item.text}
                        key={item.text}
                      />
                    ) : (
                      <div className="col-4 my-2">
                        <Skeleton
                          variant="rectangular"
                          width={210}
                          height={240}
                        />
                        <Skeleton width={210} />
                      </div>
                    )}
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </Box>
  );
}
