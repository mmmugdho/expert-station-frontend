"use client";

import curve from "@/assets/images/yellowCurve.png";
import { Button } from "@/components/atoms/button";
import { Heading } from "@/components/atoms/heading";
import { Icon } from "@/components/atoms/icon";
import { Underline } from "@/components/atoms/underline";
import Image from "next/image";

function Hero() {
  return (
    <div className="o-hero">
      <div className="o-hero__content">
        <div className="o-hero__header">
          <Heading tag="h1">
            Take Help
            <br />
            From{" "}
            <span className="o-hero__highlighted">
              <span className="o-hero__curve">
                <Image src={curve} alt="" />
              </span>
              Experts
            </span>
            <br /> Anytime{" "}
            <div className="o-hero__underlinedText">
              Anywhere
              <div className="o-hero__underline">
                <Underline type="big" />
              </div>
            </div>
          </Heading>
        </div>
        <div className="o-hero__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          molestie arcu vitae rutrum rutrum. Maecenas ac neque porttitor nulla
          volutpat finibus vitae et diam.
        </div>
        <div className="o-hero__button">
          <Button
            icon={<Icon iconName="playing" className={`o-hero__playIcon`} />}
            iconPosition="lt"
            size="large"
            backgroundColor="darkPink"
            color="white"
            // icon={<Image src={img} />}
          >
            Play Video
          </Button>
        </div>
      </div>
      <div className="o-hero__picture">here</div>
    </div>
  );
}

export default Hero;
