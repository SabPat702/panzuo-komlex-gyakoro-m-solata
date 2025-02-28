import {React} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Szobak from './tables/Szobak.jsx'
export const SzobakFoglaltsaga = () => {


return(
    <>
        <div>
            <div>
                <img src="top.jpg" alt="Táj kép" />
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
                        <img src="ketagyas.jpg" alt="Kétágyas szoba" />
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
                <div>
                    <div>
                        <h3>A vendégszobák foglalatsága</h3>
                    </div>
                </div>
        </div>
    </>
    )
}