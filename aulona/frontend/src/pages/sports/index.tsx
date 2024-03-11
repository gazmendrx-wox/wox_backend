import Sport from "@/components/Sport";
import Game from "@/components/Game";

const data = {
  sports: {
    football: [
      { id: 1, name: "Ronaldo", goals: 400 },
      { id: 2, name: "Messi", goals: 500 },
      { id: 3, name: "Mbappe", goals: 400 },
    ],
    basketball: [
      { id: 1, name: "Lebron James", baskets: 40000 },
      { id: 2, name: "Steph Curry", baskets: 30000 },
      { id: 3, name: "Kyrie Irwing", baskets: 35000 },
    ],
  },
  games: {
    fifa: [
      { id: 1, name: "Whatever Name", division: "1" },
      { id: 2, name: "Another Name", division: "2" },
      { id: 3, name: "Not so Cool", division: "3" },
    ],
    csgo: [
      { id: 1, name: "Juanflatroo", team: "GNE" },
      { id: 2, name: "Senner", team: "GNE" },
      { id: 3, name: "R1gon", team: "GNE" },
    ],
  },
};

const IndexPage = () => {
  return (
    <div>
      <h1>Sports Data</h1>
      {data.sports && (
        <>
          <Sport sportName="Football" players={data.sports.football} />
          <Sport sportName="Basketball" players={data.sports.basketball} />
        </>
      )}

      <h1>Games Data</h1>
      {data.games && (
        <>
          <Game gameName="FIFA" teams={data.games.fifa} />
          <Game gameName="CS:GO" teams={data.games.csgo} />
        </>
      )}
    </div>
  );
};

export default IndexPage;
