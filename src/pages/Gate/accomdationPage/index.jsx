
import LogoutComponent from "../../../components/common/LogoutComponent";
import PropertyCard from "../../../components/Accomdation/propertycard/PropertyCard"

const AccomdationPage = () => {
  return (
    <>
      <LogoutComponent mainheading={"Welcome Back"} />

      <PropertyCard />
      {/* 
            {ProductCardDatas.map((cardData)=>{
                return <PropertyCard  PropertyCard={cardData} />
            })}
              */}
    </>
  );
};

export default AccomdationPage;

