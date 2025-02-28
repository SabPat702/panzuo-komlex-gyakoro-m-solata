import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';

function Valasztott() {
    const [data, setData] = useState([]);
    const [valasztottSzoba, setValasztottSzoba] = useState('');
    let navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3001/szobakNeve")
        .then(data => setData(data.data))
        .catch(error => console.log("Hiba:" + error))
    }, []);
        const oldalAtiranyit = (event) => {
            event.preventDefault();
            navigate('/valasztottSzoba/' + valasztottSzoba);
        }
    return(
        <div>
            <form onSubmit={oldalAtiranyit}>
                <select value={valasztottSzoba} onChange={e => setValasztottSzoba(e.target.value)}>
                {data.map(row =>
                        <option value={row.szazon}>{row.sznev}</option>
                    )}
                </select>
                <button type="submit">Küldés</button>
                </form>
        </div>
    )
}

export default Valasztott