import FilteredPlayerTable from "./Components/FilteredPlayerTable";
import PlayerCard from "./Components/PlayerCard";

function App() {
  const haaland = {
    id: 1,
    name: "Erling Haaland",
    positions: ["forward"],
    team: "Manchester City",
    image: "https://en.wikipedia.org/wiki/Erling_Haaland#/media/File:Erling_Haaland_2023_(cropped).jpg"
  }
  return (
    <div className="App">
      <PlayerCard player={haaland}/>
      <br/>
      <FilteredPlayerTable/>
    </div>
  );
}

export default App;
