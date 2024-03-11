export default function HandleData(){
    const data = {
        sports: {
            football: [
                {id:1, name: 'Ronaldo', goals: 400},
                {id:2, name: 'Messi', goals: 500},
                {id:3, name: 'Mbappe', goals: 400},
                {id:4, name: 'Neymar', goals: 350},
                {id:5, name: 'Pele', goals: 250}
            ],
            basketball: [
                {id:6, name: 'Lebron James', baskets: 40000},
                {id:7, name: 'Steph Curry', baskets: 30000},
                {id:8, name: 'Kyrie Irwing', baskets: 35000},
                {id:9, name: 'Michael Jordan', baskets: 28000},
                {id:10, name: 'Shaquille O Neal', baskets: 27000}
            ],
            pool: [
                {id:11, name: 'Eklent Kaci', pockets: 3500},
                {id:12, name: 'Shane Van Boening', pockets: 8000},
                {id:13, name: 'Efren Reyes', pockets: 7000},
                {id:14, name: 'Joshua Filler', pockets: 4500},
                {id:15, name: 'Jayson Shaw', pockets: 6500}
            ],
            baseball: [
                {id:16, name: 'Babe Ruth', homeruns: 727},
                {id:17, name: 'Willie Mays', homeruns: 660},
                {id:18, name: 'Barry Bonds', homeruns: 762},
                {id:19, name: 'Ted Williams', homeruns: 656},
                {id:20, name: 'Hank Aaron', homeruns: 755}
            ],
            hockey: [
                {id:21, name: 'Gordie Howe', goals_hockey: 801},
                {id:22, name: 'Wayne Gretzky', goals_hockey: 894},
                {id:23, name: 'Mario Lemieux', goals_hockey: 690},
                {id:24, name: 'Maurice Richard', goals_hockey: 500},
                {id:25, name: 'Bobby Orr', goals_hockey: 567}
            ]
        },
        games: {
            fifa: [
                {id:26, name: 'Manuel Bachoore', division: '1'},
                {id:27, name: 'Andres Vejrgang', division: '2'},
                {id:28, name: 'Paulo Henrique', division: '3'},
                {id:29, name: 'Mark Zakhary', division: '4'},
                {id:30, name: 'Paulo Netto', division: '5'}
            ],
            csgo: [
                {id:31, name: 'Juanflatroo', team: 'GNE'},
                {id:32, name: 'Senner', team: 'GNE'},
                {id:33, name: 'R1gon', team: 'GNE'},
                {id:34, name: 'Sinnopsyy', team: 'GNE'},
                {id:35, name: 'gxx-', team: 'GNE'}
            ],
            gta_5: [
                {id:36, name: 'VanossGaming', subscribes: 25000000},
                {id:37, name: 'PewDiePie', subscribes: 109000000},
                {id:38, name: 'Mrbossftw', subscribes: 2000000},
                {id:39, name: 'Jelly', subscribes: 18000000},
                {id:40, name: 'Ninja', subscribes: 23000000}
            ],
            minecraft: [
                {id:41, name: 'Technoblade', levels: 69000},
                {id:42, name: 'Dream', levels: 65000},
                {id:43, name: 'DanTDM', levels: 62000},
                {id:44, name: 'Sapnap', levels: 59000},
                {id:45, name: 'Grian', levels: 56000},
            ],
            fortnite: [
                {id:46, name: 'Bugha', wins: 2450},
                {id:47, name: 'Aqua', wins: 2200},
                {id:48, name: 'Stetty', wins: 2000},
                {id:49, name: 'Mongraal', wins: 1980},
                {id:50, name: 'Ninja', wins: 2350},
            ]

        }
    };

    function handleStatistics(player, obj){
      if (obj === 'football'){
        return `${player.goals} goals`
      }
      if (obj === 'basketball'){
        return `${player.baskets} baskets`
      }
      if (obj === 'pool'){
        return `${player.pockets} pockets`
      }
      if (obj === 'baseball'){
        return `${player.homeruns} homeruns`
      }
      if (obj === 'hockey'){
        return `${player.goals_hockey} hockey goals`
      }
    }

    function handleGameStats(game, gameName){
      if (gameName === 'fifa'){
        return `${game.division} division`
      }
      if (gameName === 'csgo'){
        return `${game.team} team`
      }
      if (gameName === 'gta_5'){
        return `${game.subscribes} subscribes`
      }
      if (gameName === 'minecraft'){
        return `${game.levels} levels`
      }
      if (gameName === 'fortnite'){
        return `${game.wins} wins`
      }
    }

    return (
    <>
         <div>
              <ul>
                {Object.keys(data.sports).map((obj) => (
                  <li key={obj}>
                    <h4>{obj}</h4>
                    <ol>
                      {data.sports[obj].map((player) => (
                        <li key={player.id}>
                            {player.name} - {handleStatistics(player, obj)}
                        </li>
                      ))}
                    </ol>
                  </li>
                ))}
              </ul>
        </div>
        <div>
              <ul>
                {Object.keys(data.games).map((gameName) => (
                  <div>
                    <li key={gameName}>
                    <h4>{gameName}</h4>
                    <ol>
                      {data.games[gameName].map((game) => (
                        <li key={game.id}>
                          {game.name} - {handleGameStats(game, gameName)}
                        </li>
                      ))}
                    </ol>
                  </li>
                  </div>
                ))}
              </ul>
          </div>
    </>
        
      );
}
