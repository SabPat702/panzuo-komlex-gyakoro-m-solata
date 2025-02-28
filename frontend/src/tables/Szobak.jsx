import {useEffect, useState} from 'react'
import axios from 'axios'

function Szobak() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/szobak")
        .then(data => setData(data.data))
        .catch(error => console.log("Hiba:" + error))
    }, []);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Szoba neve</th>
                        <th>Ágyak száma</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr>
                            <td>{row.sznev}</td>
                            <td>{row.agy} ágyas</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Szobak