


function Automobile({auto}) {
    return (
        <tr>
            <td>{auto.year}</td>
            <td>{auto.make}</td>
            <td>{auto.model}</td>
            <td>{auto.color}</td>
            <td><button>Pick Me!</button></td>
        </tr>
    )
}

export default Automobile