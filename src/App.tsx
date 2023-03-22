import TrendingLogo from "./assets/trending.svg";
import Card from "./components/Card";
import { cardsData } from "./data/data";

function App() {
  return (
    <div className="bg-background text-white min-h-screen w-full z-[1] p-14">
      <div className="flex gap-x-4 font-semibold">
        <img src={TrendingLogo} alt="Trending Assets" />
        <div>Trending Assets</div>
      </div>

      <div className="flex flex-wrap gap-12 mt-12">
        {cardsData.map((cardData) => (
          <Card data={cardData} key={cardData.id} />
        ))}
      </div>
    </div>
  );
}
export default App;
