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

export default function SportsData() {
    return (
        <div>
            <h1>Sportet:</h1>
            <ul>
                {Object.keys(data.sports).map(sportType => (
                    <li key={sportType}>
                        <h2>{sportType}</h2>
                        <ul>
                            {data.sports[sportType].map(player => (
                                <li key={player.id}>
                                    {player.name} - {player.goals || player.baskets} {player.goals ? 'goals' : 'baskets'}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <h1>Lojërat:</h1>
            <ul>
                {Object.keys(data.games).map(gameType => (
                    <li key={gameType}>
                        <h2>{gameType}</h2>
                        <ul>
                            {data.games[gameType].map(game => (
                                <li key={game.id}>
                                    {game.name} - {game.division || game.team} {game.division ? 'division' : 'team'}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
