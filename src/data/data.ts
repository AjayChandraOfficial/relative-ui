import BinanceLg from "../assets/symbols/binance-lg.svg";
import BinanceLogo from "../assets/symbols/binance.svg";
import BitcoinLg from "../assets/symbols/bitcoin-lg.svg";
import BitcoinLogo from "../assets/symbols/bitcoin.svg";
import EthereumLg from "../assets/symbols/ethereum-lg.svg";
import EthereumLogo from "../assets/symbols/ethereum.svg";
import ShibaLg from "../assets/symbols/shiba-lg.svg";
import SolanaLg from "../assets/symbols/solana-lg.svg";
import SolanaLogo from "../assets/symbols/solana.svg";

export const cardsData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$31,812.80",
    priceChange: "10%",
    priceChangeKey: "positive",
    tvl: "$60,000",
    popularPairs: [
      {
        id: 1,
        name: "Binance",
        image: BinanceLogo,
      },
      {
        id: 2,
        name: "Solana",
        image: SolanaLogo,
      },
      {
        id: 3,
        name: "Ethereum",
        image: EthereumLogo,
      },
    ],
    symbolGradient: "bg-gradient-to-b from-[#626a881a] to-[#eab3000f]",
    symbolImage: BitcoinLg,
  },
  {
    id: 2,
    name: "Solana",
    symbol: "SOL",
    price: "$32.83",
    priceChange: "12.32%",
    priceChangeKey: "negative",
    tvl: "$60,000",
    popularPairs: [
      {
        id: 1,
        name: "Bitcoin",
        image: BitcoinLogo,
      },
      {
        id: 2,
        name: "Ethereum",
        image: EthereumLogo,
      },
      {
        id: 3,
        name: "Binance",
        image: BinanceLogo,
      },
    ],
    symbolGradient: "bg-gradient-to-b from-[#626a881a] to-[#dc1fff1a]",
    symbolImage: SolanaLg,
  },
  {
    id: 3,
    name: "Ethereum",
    symbol: "ETH",
    price: "$1,466.45",
    priceChange: "11.93%",
    priceChangeKey: "negative",
    tvl: "$60,000",
    popularPairs: [
      {
        id: 1,
        name: "Solana",
        image: SolanaLogo,
      },
      {
        id: 2,
        name: "Bitcoin",
        image: BitcoinLogo,
      },
      {
        id: 3,
        name: "Binance",
        image: BinanceLogo,
      },
    ],
    symbolGradient: "bg-gradient-to-b from-[#626a881a] to-[#edf0f41a]",
    symbolImage: EthereumLg,
  },
  {
    id: 4,
    name: "Binance",
    symbol: "BNB",
    price: "$1.00",
    priceChange: "0.26%",
    priceChangeKey: "positive",
    tvl: "$60,000",
    popularPairs: [
      {
        id: 1,
        name: "Solana",
        image: SolanaLogo,
      },
      {
        id: 2,
        name: "Ethereum",
        image: EthereumLogo,
      },
      {
        id: 3,
        name: "Binance",
        image: BinanceLogo,
      },
    ],

    symbolGradient: "bg-gradient-to-b from-[#626a881a] to-[#eab3000f]",
    symbolImage: BinanceLg,
  },
  {
    id: 5,
    name: "Shiba Inu",
    symbol: "SHIB",
    price: "$0.00000001948",
    priceChange: "8.1%",
    priceChangeKey: "negative",
    tvl: "$60,000",
    popularPairs: [
      {
        id: 1,
        name: "Solana",
        image: SolanaLogo,
      },
      {
        id: 2,
        name: "Ethereum",
        image: EthereumLogo,
      },
      {
        id: 3,
        name: "Binance",
        image: BinanceLogo,
      },
    ],
    symbolGradient: "bg-gradient-to-b from-[#626a881a] to-[#e42d041a]",
    symbolImage: ShibaLg,
  },
];
