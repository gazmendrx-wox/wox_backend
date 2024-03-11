import Basketballers from "./Basketballers";
import Footballers from "./Footballers";

export default function SportData({data}){
    return <div>
        <Footballers data = {data.football} />
        <Basketballers data = {data.basketball} />
    </div>
}

























// const SportsData = () => {
//   return (
//     <div>
//       <h2>Sports Data</h2>
//       <ul>
//         {Object.keys(data.sports).map((sport) => (
//           <li key={sport}>
//             <h3>{sport}</h3>
//             <ul>
//               {data.sports[sport].map((player) => (
//                 <li key={player.id}>
//                   {player.name} - {sport === 'football' ? `Goals: ${player.goals}` : `Baskets: ${player.baskets}`}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>

//       <h2>Games Data</h2>
//       <ul>
//         {Object.keys(data.games).map((game) => (
//           <li key={game}>
//             <h3>{game}</h3>
//             <ul>
//               {data.games[game].map((item) => (
//                 <li key={item.id}>
//                   {item.name} - {game === 'fifa' ? `Division: ${item.division}` : `Team: ${item.team}`}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SportsData