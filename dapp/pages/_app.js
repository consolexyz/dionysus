import React from "react";
import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
const { chains, provider } = configureChains(
  [chain.goerli],
  [
alchemyProvider({ apiKey: "n8zuDwBLcJ7RCuZDZrMZGKJ8ykdIk_2t"}),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Dionysus",
  chains,
});
const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <WagmiConfig client={client}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({
            accentColor: "#F0997D",
            overlayBlur: "small",
          })}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </MoralisProvider>
  );
}

export default MyApp;
