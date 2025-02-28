import {useEffect, useState} from 'react'
import axios from 'axios'

function SzobakKihasznaltsaga() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/szobakKihasznaltsaga")
        .then(data => setData(data.data))
        .catch(error => console.log("Hiba:" + error))
    }, []);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Szoba neve</th>
                        <th>Vendégek száma</th>
                        <th>Vendégéjszakák száma</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr>
                            <td>{row.sznev}</td>
                            <td>{row.fo}</td>
                            <td>{row.este}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SzobakKihasznaltsaga