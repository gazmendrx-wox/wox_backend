const Game = ({ gameName, teams }) => {
  return (
    <div>
      <h2>{gameName}</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            {team.name} - {team.division || team.team}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
