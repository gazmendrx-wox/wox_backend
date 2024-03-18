import GamesData from "@/components/GamesData"

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
/**
 * DETYRA:
 *
 * Me i shfaqe te gjitha te dhanat prej objektit data ne nje page ne next/react;
 */

export default function ComponentsDemoHomeworks() {
    return <div>
        <GamesData data={data.games} />
    </div>
}