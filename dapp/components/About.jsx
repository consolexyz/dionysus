import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/logo-square.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-title">
          <h2>
            About <span>$DION</span>
          </h2>
        </div>
        <div className="about-info">
          <div className="about-img">
            <Image src={logo} height="" width="" alt="caifu logo" />
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eos
              pariatur, necessitatibus sint blanditiis corrupti explicabo cum
              fuga officia quae fugiat, earum molestiae. Esse dolorum id,
              voluptate maiores doloribus sunt. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Recusandae sit accusamus impedit
              dolores, nihil illum explicabo enim mollitia harum aperiam!
              Voluptas veniam, porro modi doloribus ea, laborum necessitatibus
              ex illum aut ipsum harum sunt! Molestias quod consectetur quis
              sunt asperiores?
            </p> */}
          </div>
          <div className="about-text">
            <p>
              Dinoysus is a decentralized, deep liquidity hub for Arbitrum
              NFTs, addressing most of the liquidity issues that currently
              plague NFTs. The Dinoysus AMM protocol uses customizable bonding
              curves to facilitate NFT (ERC721s) to token swaps. Liquidity
              providers (LPs) can deposit into single-sided buy or sell pools
              and charge spreads. Users on Caishen can trade NFT in liquidity
              pools. A community-governed protocol building the future of NFTs
              on Arbitrum.
            </p>
          </div>
        </div>
        <div className="btn about-btn">
          <Link href="/">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
