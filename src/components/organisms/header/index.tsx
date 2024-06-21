"use client";
import logo from "@/assets/logo/eExperts.svg";
import { Button } from "@/components/atoms/button";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="o_header">
      <span className={"o_header__image"}>
        <Image src={logo} alt="Example Image" />
      </span>
      <nav>
        <ul className="o_header__ul">
          <li>
            <Link href="#" className="o_header__list">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="o_header__list">
              Page
            </Link>
          </li>
          <li>
            <Link href="#" className="o_header__list">
              Services
            </Link>
          </li>
          <li>
            <Button size="medium" backgroundColor="yellow" color="white">
              Login
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
