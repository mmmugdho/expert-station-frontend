import HeaderCommon from "@/components/molecules/common-header";
import ServiceInfo from "@/components/molecules/serviceInfo";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <HeaderCommon first="Top" middle="Services" last="" />
      <div className="o-service">
        {/* <Slider> */}
        <ServiceInfo />
        <ServiceInfo />
        <ServiceInfo />
        {/* </Slider> */}
      </div>
    </>
  );
};
export default Services;
