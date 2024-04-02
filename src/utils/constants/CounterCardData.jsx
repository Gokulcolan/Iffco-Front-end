import property from "../../assests/images/dashboard-employees.jpg";
import occupied from "../../assests/images/dashboard-occupied-rooms.png";
import vacant from "../../assests/images/dashboard-rooms.png";
import undermaintenance from "../../assests/images/dashboard-room-service.png";
import React, { useEffect } from "react";
import Countercard from "../../components/common/Countercard";
import { AccomodationCardGetApi } from "../../redux/action/adminAction";
import { useDispatch, useSelector } from "react-redux";
import { adminSelector } from "../../redux/slice/adminSlice";

function CounterCardData() {
  const { accomCardInfo } = useSelector(adminSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AccomodationCardGetApi());
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Countercard
          icon={property}
          title={"Property Allocated"}
          values={accomCardInfo?.property_allocated}
        />
        <Countercard
          icon={occupied}
          title={"Occupied"}
          values={accomCardInfo?.property_allocated}
        />
        <Countercard
          icon={occupied}
          title={"Vacant / Partially Filled"}
          values={accomCardInfo?.property_allocated}
        />
        <Countercard
          icon={undermaintenance}
          title={"Under Maintenance"}
          values={accomCardInfo?.under_maintenance}
        />
      </div>
    </div>
  );
}

export default CounterCardData;
