import {React, useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Szobak from './tables/Szobak.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import top from '../public/top.jpg'
import ketAgyas from '../public/ketagyas.jpg'

export const SzobakFoglaltsaga = () => {
    const {id} = useParams()
    const [vendegek, setVendegek] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/valasztottSzoba/" + id)
        .then(vendegek => setVendegek(vendegek.data))
        .catch(error => console.log("Hiba:" + error))
    }, []);

return(
    <>
        <div>
            <div>
                <img src={top} alt="Táj kép" />
            </div>
        </div>
        <div>
        <Container fluid>
            <Row>
                    <Col md={6} sm={12}>
                    <div>
                        <h3>Falusi szálláshely fajtái</h3>
                        <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
                        <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
                        <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
                        <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
                        <img src={ketAgyas} alt="Kétágyas szoba" />
                    </div>
                    </Col>
                    <Col md={6} sm={12}>
                    <div className="bg-torzs">
                        <h3>A hét törpe fogadó</h3>
                        <Szobak />
                        <p>A házban összesen 21 fő fér el.</p>
                        <p>Felszereltségük:</p>
                        <li>Ruhásszekrény</li>
                        <li>Saját fürdőszoba zuhanytálca</li>
                        <li>WC (fürdőszobával egyben)</li>
                    </div>
                    </Col>
            </Row>
        </Container>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Vendég neve</th>
                        <th>Érkezés dátuma</th>
                        <th>Távozás dátuma</th>
                    </tr>
                </thead>
                <tbody>
                    {vendegek.map(valasztott => (
                        <tr>
                            <td>{valasztott.vnev}</td>
                            <td>{valasztott.erk}</td>
                            <td>{valasztott.tav}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
    )
}