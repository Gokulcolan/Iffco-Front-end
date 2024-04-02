import CustomCard from "../../../common/card";
import Grid from "@mui/material/Grid";

const AdminHeaderCard = ({ cardData }) => {
  return (
    <div style={{marginTop:"12px"}}>
      <Grid container spacing={2} columns={12}>
        {cardData.map((data, i) => (
          <Grid item key={i} xs={6} sm={12} md={6} lg={4} xl={3}>
            <CustomCard CardData={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AdminHeaderCard;
