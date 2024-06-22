"use client";
import logo from "@/assets/logo/eExperts.svg";
import { Button } from "@/components/atoms/button";
import { Icon } from "@/components/atoms/icon";
import { Text } from "@/components/atoms/text";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can perform any action with the form data, like sending it to a server
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="o-footer">
      <div className="o-footer__left">
        <span className="o-footer__image">
          <Image src={logo} alt="Example Image" height={57} width={282} />
        </span>
        <div className="o-footer__leftText">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            molestie arcu vitae rutrum rutrum. Maecenas ac neque porttitor nulla
            volutpat finibus
          </Text>
        </div>
        <div className="o-footer__socialIconsContent">
          <div className="o-footer__socialIconText">
            <Text>Follow Us</Text>
          </div>
          <div className="o-footer__socialIcons">
            <div className="o-footer__item">
              <Link href="https://www.linkedin.com">
                <Icon iconName="linkedin" />
              </Link>
            </div>
            <div className="o-footer__item">
              <Link href="https://www.facebook.com">
                <Icon iconName="facebook" />
              </Link>
            </div>
            <div className="o-footer__item">
              <Link href="https://www.instagram.com">
                <Icon iconName="insta" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="o-footer__middle">
        <div className="o-footer__mddileText">
          <Text>Quick Links</Text>
        </div>
        <div className="o-footer__linkList">
          <Link className="o-footer__linkItem" href="#">
            Online Experts
          </Link>
          <Link className="o-footer__linkItem" href="#">
            Experts
          </Link>
          <Link className="o-footer__linkItem" href="#">
            Free Services
          </Link>
          <Link className="o-footer__linkItem" href="#">
            Services
          </Link>
          <Link className="o-footer__linkItem" href="#">
            About
          </Link>
        </div>
      </div>
      <div className="o-footer__right">
        <div className="o-footer__rightText">
          <Text>Send Direct Message</Text>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="o-footer__inputGroup">
            <div>
              <input
                className="o-footer__textInput"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="o-footer__textInput"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <textarea
              className="o-footer__textArea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Message"
            />
          </div>
          <div className="o-footer__button">
            <Button
              size="medium"
              backgroundColor="yellow"
              color="white"
              clickHandler={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
