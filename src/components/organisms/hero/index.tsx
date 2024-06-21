import { Button } from "@/components/atoms/button";
import React from "react";
import Image from "next/image";
import "../hero/index";

function Hero() {
  return (
    <div className="o-hero">
      <div className="o-hero__content">
        <div className="o-hero__content--header">
          <p>Take Help From Experts Anytime Anywhere</p>
        </div>
        <div className="o-hero__content--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          molestie arcu vitae rutrum rutrum. Maecenas ac neque porttitor nulla
          volutpat finibus vitae et diam.
        </div>
        <div className="o-hero__content--button">
          <Button>Play Video</Button>
        </div>
      </div>
      <div className="o-hero__picture">
        <Image src="" width={500} height={500} alt="Picture of the author" />
      </div>
    </div>
  );
}

export default Hero;
