import { Box, Card } from "@mui/material";
import PaymentCard from "./PaymentCard";
import LogoutComponent from "../../../components/common/LogoutComponent";

const Payment = () => {
  return (
    <>
      <div style={{}}>
        <LogoutComponent mainheading={"Payments"} />

        <PaymentCard />
      </div>
    </>
  );
};

export default Payment;
