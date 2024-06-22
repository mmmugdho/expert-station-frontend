import HeaderCommon from "@/components/molecules/common-header";
import ExpertInfo from "@/components/molecules/expertInfo";

const Experts = () => {
  return (
    <>
      <HeaderCommon first="" middle="Online" last="Experts" />
      <div className="o-experts">
        <ExpertInfo />
      </div>
    </>
  );
};
export default Experts;
