import expert1 from "@/assets/images/expert1.png";
import Image from "next/image";

const ExpertInfo = () => {
  return (
    <div className="m-expertInfo">
      <div>
        <Image
          className="m-expertInfo__image"
          src={expert1}
          alt="expert_image"
        />
      </div>
      <div>
        <p className="m-expertInfo__name">John Doe</p>
      </div>
    </div>
  );
};
export default ExpertInfo;
