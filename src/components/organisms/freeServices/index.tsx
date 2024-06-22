import HeaderCommon from "@/components/molecules/common-header";
import ServiceInfo from "@/components/molecules/serviceInfo";

const FreeServices = () => {
  return (
    <>
      <HeaderCommon first="Free" middle="Services" last="" />
      <div className="o-freeServices">
        <ServiceInfo />
      </div>
    </>
  );
};
export default FreeServices;
