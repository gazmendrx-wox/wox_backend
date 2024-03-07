const data = {
    sports: {
        football: [
            {id:1, name: 'Ronaldo', goals: 400},
            {id:2, name: 'Messi', goals: 500},
            {id:3, name: 'Mbappe', goals: 400}
        ],
        basketball: [
            {id:1, name: 'Lebron James', baskets: 40000},
            {id:2, name: 'Steph Curry', baskets: 30000},
            {id:3, name: 'Kyrie Irwing', baskets: 35000}
        ]
    },
    games: {
        fifa: [
            {id: 1, name: 'Whatever Name', division: '1'},
            {id: 2, name: 'Another Name', division: '2'},
            {id: 3, name: 'Not so Cool', division: '3'},
        ],
        csgo: [
            {id: 1, name: 'Juanflatroo', team: 'GNE'},
            {id: 2, name: 'Senner', team: 'GNE'},
            {id: 3, name: 'R1gon', team: 'GNE'},
        ]
    }
}

const SportsData = () => {
  return (
    <div>
      <h2>Sports Data</h2>
      <ul>
        {Object.keys(data.sports).map((sport) => (
          <li key={sport}>
            <h3>{sport}</h3>
            <ul>
              {data.sports[sport].map((player) => (
                <li key={player.id}>
                  {player.name} - {sport === 'football' ? `Goals: ${player.goals}` : `Baskets: ${player.baskets}`}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2>Games Data</h2>
      <ul>
        {Object.keys(data.games).map((game) => (
          <li key={game}>
            <h3>{game}</h3>
            <ul>
              {data.games[game].map((item) => (
                <li key={item.id}>
                  {item.name} - {game === 'fifa' ? `Division: ${item.division}` : `Team: ${item.team}`}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportsData