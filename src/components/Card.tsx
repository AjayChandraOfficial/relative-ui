import { cardsData } from "../data/data";

enum PriceChangeKeyColor {
  "positive" = "text-green",
  "negative" = "text-red",
}
enum PriceChangeKeySymbol {
  "positive" = "+",
  "negative" = "-",
}

interface CardProps {
  data: typeof cardsData[0];
}

export default function Card({ data }: CardProps) {
  const circleGradientClassName = `${data.symbolGradient} rounded-full flex items-center justify-center w-full h-full`;
  const priceChangeColor = `text-xs ${
    PriceChangeKeyColor[data.priceChangeKey as keyof typeof PriceChangeKeyColor]
  }`;
  const priceChangeText = `${
    PriceChangeKeySymbol[
      data.priceChangeKey as keyof typeof PriceChangeKeySymbol
    ]
  }${data.priceChange}`;

  return (
    <div className="w-[290px] card-gradient rounded-2xl font-semibold z-[1] relative mt-10">
      <div className="relative mx-auto h-[60px] w-[125px] circular bg-background"></div>

      <div className="absolute symbol">
        <div className={circleGradientClassName}>
          <img src={data.symbolImage} alt={data.symbol} />
        </div>
      </div>

      <div className="absolute circle"></div>

      <div className="flex flex-col text-center justify-around">
        <div className="pt-5 pb-4 text-xs text-gray">
          {data.name} ({data.symbol})
        </div>

        <div className="bg-background rounded-3xl mx-5 flex p-2 text-center items-center justify-center">
          <div className="text-base text-center flex-1 flex items-center justify-end">
            {data.price}
          </div>
          <div className="max-w-[44px] w-[44px]"></div>
          <div className={priceChangeColor}>{priceChangeText}</div>
        </div>

        <div className="pt-3 pb-4 text-xs text-graydark">Price</div>

        <div className="bg-background rounded-3xl mx-5 flex p-2 items-center justify-center">
          <div>{data.tvl}</div>
        </div>

        <div className="pt-3 pb-5 text-xs text-graydark">TVL</div>

        <div className="bg-background rounded-3xl mx-auto px-4 flex p-2 items-center justify-center gap-[12px]">
          {data.popularPairs.map((pair) => (
            <img src={pair.image} alt={pair.name} key={pair.name} />
          ))}
        </div>

        <div className="pt-3 pb-4 text-xs text-graydark">Popular Pairs</div>
      </div>
    </div>
  );
}
