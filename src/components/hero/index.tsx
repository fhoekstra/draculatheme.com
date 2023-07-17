"use client";

import "./index.scss";

import Image from "next/image";
import Particles from "../particles";
import { usePathname } from "next/navigation";

const Hero = () => {
  const pathname = usePathname();

  if (pathname === "/")
    return (
      <section className="hero">
        <Particles className="particles" />
        <div className="content main">
          <div className="dracula-icon">
            <Image
              src="/images/hero/dracula-icon.svg"
              width={192}
              height={192}
              alt="Drac"
            />
          </div>
          <div className="title-wrapper">
            <h1 className="title p">Dracula</h1>
            <h2 className="title t">
              The most famous dark theme ever created and available everywhere.
            </h2>
          </div>
        </div>
        <div className="castle"></div>
      </section>
    );

  return (
    <section className="hero">
      <Particles className="particles" />
      <div className="castle"></div>
    </section>
  );
};

export default Hero;
