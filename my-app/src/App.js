import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { ArcanaConnector } from "@arcana/auth-wagmi";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, mainnet, goerli,polygonMumbai ,filecoin} from "@wagmi/core/chains";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Auth } from "@arcana/auth-react";
import '@rainbow-me/rainbowkit/styles.css';
import "./App.css"
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Account } from "./routes/Account";



export const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Arcana Wallet",
    iconUrl: "",
    iconBackground: "#101010",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
          // appId parameter refers to App Address value in the Dashboard
          appId: "54935b67db389452db1b12c78d3c3dc4fb8a3a85",
          // alwaysVisible:"true",
          
        },
      });
      return {
        connector,
      };
    },
  };
};

const HyperspaceTestnet= {
  id: 3141 ,
  name: 'Filecoin-Hyperspace',
  network: 'filecoin',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'TFIL',
    symbol: 'TFIL',
  },
  rpcUrls: {
    default: {
      http: ['https://api.hyperspace.node.glif.io/rpc/v1'],
    },
  },
  blockExplorers: {
    default: { name: 'hyperspace', url: 'https://hyperspace.filfox.info/en' },
    
  },
  testnet: true,
};

const connectors = (chains) =>
  connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [ArcanaRainbowConnector({ chains }), metaMaskWallet({ chains })],
    },
  ]);

const { chains, provider } = configureChains(
  [mainnet, polygon,goerli,polygonMumbai,HyperspaceTestnet],
  [publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors(chains),
  provider,
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} coolMode>
      <div className="App">
        {/* <ConnectButton/> */}
        <Navbar/>
        <div className="border"></div>
        <div className="main-page">

        <Outlet/>
        </div>
      </div>
    </RainbowKitProvider>
  </WagmiConfig>
  );
}

export default App;
