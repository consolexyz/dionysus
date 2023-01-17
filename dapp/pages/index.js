import Head from "next/head";
// import About from "../components/About";
import Cta from "../components/Cta";
import Header from "../components/Header";
import Rounds from "../components/Rounds";
export default function Home() {
  return (
    <>
      <Head>
        <title> Dionysus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content=" Dionysus is a decentralized, deep liquidity hub for Arbitrum NFTs, addressing most of the liquidity issues that currently plague NFTs. The Caishen AMM protocol uses customizable bonding curves to facilitate NFT (ERC721s) to token swaps. Liquidity providers (LPs) can deposit into single-sided buy or sell pools and charge spreads. Users on Caishen can trade NFT in liquidity pools. A community-governed protocol building the future of NFTs on Arbitrum. 
          "
        />
        <link rel="shortcut icon" href="/assets/logo-square.jpg" />
      </Head>
      <Header />
      <main className="main">
        <Cta />
      </main>
      {/* <About /> */}
      <Rounds />
    </>
  );
}
