"use client"


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
  };
export default function DisplayData(){
    return<>
    <div>
        {Object.keys(data.sports).map(sportType => (
            <div key={sportType}>
                <h1>{sportType}</h1>
              {data.sports[sportType].map(player => (
             <div key={player.id}>
                <h1>{player.name} {player.goals || player.baskets} {player.goals ? 'gola' : 'baskets'}</h1>
             </div>

              ))}
            </div>
        )) }
    </div>
    <div>
        {Object.keys(data.games).map(gamesType => (
            <div key={gamesType}>
                <h1>{gamesType}</h1>
                {data.games[gamesType].map(game => (
                    <div key={game.id}>
                        <h1>{game.name} {game.division || game.team} {game.division ? 'divisin' : 'team'} </h1>
                    </div>
                ))}
            </div>
        ))}
    </div>


    




    
    </>
}