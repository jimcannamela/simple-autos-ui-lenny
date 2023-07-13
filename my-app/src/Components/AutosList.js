
import Automobile from "./Automobile";

function AutosList({autos}) {
    return (

        autos.map((auto) =>  <Automobile auto={auto}/>)
    )
}

export default AutosList