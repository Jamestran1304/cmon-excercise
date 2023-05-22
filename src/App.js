import FilteredPlayerTable from "./Components/FilteredPlayerTable";
import PlayerCard from "./Components/PlayerCard";

function App() {
  const haaland = {
    id: 1,
    name: "Erling Haaland",
    positions: ["Forward"],
    team: "Manchester City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg",
  };
  return (
    <div className="App">
      <div>
        <h1>Problem 1</h1>
        <PlayerCard player={haaland} />
      </div>
      <div>
        <h1>Problem 2 3</h1>
        <FilteredPlayerTable />
      </div>
    </div>
  );
}

export default App;
