const Sports = ({ sportName, players }) => {
  return (
    <div>
      <h2>{sportName}</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.goals || player.baskets}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sports;
