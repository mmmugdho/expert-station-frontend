import miniHuman from "@/assets/images/miniHuman.png";
import serviceImage1 from "@/assets/images/service1.png";
import unfilledHeart from "@/assets/images/unfilledHeart.png";
import Image from "next/image";

const ServiceInfo = () => {
  return (
    <div className="m-serviceInfo">
      <div className="m-serviceInfo__imageWrapper">
        <Image
          className="m-serviceInfo__image"
          src={serviceImage1}
          alt="service_image"
        />
        <div className="m-serviceInfo__title">User Research Process</div>
        <div className="m-serviceInfo__react">
          <Image src={unfilledHeart} alt="react_icon" />
        </div>
      </div>
      <div className="m-serviceInfo__userAndDuration">
        <div className="m-serviceInfo__userDetails">
          <div>
            <Image
              className="m-serviceInfo__expertImage"
              src={miniHuman}
              alt="service_provider's_image"
            />
          </div>
          <div>
            <p className="m-serviceInfo__commonText"> Expert</p>
            <p className="m-serviceInfo__commonSubText"> John Doe</p>
          </div>
        </div>
        <div className="m-serviceInfo__durationDetails">
          <p className="m-serviceInfo__commonText"> Duration</p>
          <p className="m-serviceInfo__commonSubText"> 40 min</p>
        </div>
      </div>
    </div>
  );
};
export default ServiceInfo;
