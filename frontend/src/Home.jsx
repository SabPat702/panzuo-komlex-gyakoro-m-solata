import {React} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Szobak from './tables/Szobak.jsx'
export const Home = () => {


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
                    <Col md={4} sm={12}>
                    <div className="bg-torzs">
                        <h3>Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
                        <br />
                        <p>
                            A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára.  A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség, a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében. 
                        </p>
                        <a href="https://falusiturizmus.eu/">Tájékoztató oldal</a>
                        <br />
                        <img src="logo.png" alt="A falusi túrizmus logója" />
                        <br />
                        <img src="holloko_masolata.jpg" alt="Hollókő másolata" />
                    </div>
                    </Col>
                    <Col md={4} sm={12}>
                    <div>
                        <h3>Falusi szálláshely fajtái</h3>
                        <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
                        <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
                        <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
                        <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
                        <img src="ketagyas.jpg" alt="Kétágyas szoba" />
                    </div>
                    </Col>
                    <Col md={4} sm={12}>
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
                    <div>
                        <h3>A szobák kihasználtsága:</h3>
                    </div>
                </div>
        </div>
    </>
    )
}