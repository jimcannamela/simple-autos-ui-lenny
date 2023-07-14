
import Automobile from "./Automobile";

function AutosList({autos}) {
    return (
        <table>
            <tr>
                <th>Year</th>
                <th>Make</th>
                <th>Model</th>
                <th>Color</th>
            </tr>
        {autos.map((auto) =>  <Automobile auto={auto}/>)}
        </table>
    )
}

export default AutosList