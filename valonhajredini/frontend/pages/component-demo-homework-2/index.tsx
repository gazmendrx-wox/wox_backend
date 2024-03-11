import SportsData from "@/components/SportsData";
import GamesData from "@/components/GamesData";
const data = {
    sports: {
        football: [
            {id: 1, name: 'Ronaldo', goals: 400},
            {id: 2, name: 'Messi', goals: 500},
            {id: 3, name: 'Mbappe', goals: 400}
        ],
        basketball: [
            {id: 4, name: 'Lebron James', baskets: 40000},
            {id: 5, name: 'Steph Curry', baskets: 30000},
            {id: 6, name: 'Kyrie Irwing', baskets: 35000}
        ]
    },
    games: {
        fifa: [
            {id: 7, name: 'Whatever Name', division: '1'},
            {id: 8, name: 'Another Name', division: '2'},
            {id: 9, name: 'Not so Cool', division: '3'},
        ],
        csgo: [
            {id: 10, name: 'Juanflatroo', team: 'GNE'},
            {id: 11, name: 'Senner', team: 'GNE'},
            {id: 13, name: 'R1gon', team: 'GNE'},
        ]
    }
}

export default function ComponentsDemoHomewoork(){
    return <div>        
        <SportsData data={data.sports} />
        <GamesData data={data.games} />
    </div>
}