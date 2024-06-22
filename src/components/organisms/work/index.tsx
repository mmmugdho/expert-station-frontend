import { Button } from "@/components/atoms/button";
import HeaderCommon from "@/components/molecules/common-header";

const Work = () => {
  return (
    <>
      <HeaderCommon first="Know" middle="About Our" last="Work" />
      <div className="o-work">
        <div className="o-work__content">
          <div className="o-work__title">
            Lorem ipsum dolor sit amet, consectetur adipisciel Curabitur
            molestie
          </div>
          <div className="o-work__textHeadline">What We Do?</div>
          <div className="o-work__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            molestie arcu vitae rutrum rutrum. Maecenas ac neque porttitor nulla
            volutpat finibus vitae et diam Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur molestie arcu vitae rutrum
            rutrum. Maecenas ac neque porttitor nulla volutpat finibus vitae et
            diam
          </div>
          <div className="o-work__button">
            <Button size="large" backgroundColor="darkPink" color="white">
              Learn More
            </Button>
          </div>
        </div>
        <div className="o-work__imageContent">hello world</div>
      </div>
    </>
  );
};

export default Work;
