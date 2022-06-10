import inCome from "../../assets/inCome.svg"
import outCome from "../../assets/outCome.svg"
import Total from "../../assets/Total.svg"

import { Container } from "./style";

export function Summary()  {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inCome} alt="" />
                </header>
                <strong>R$:1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outCome} alt="" />
                </header>
                <strong>R$:- 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="" />
                </header>
                <strong>R$:500,00</strong>
            </div>
        </Container>
    );
}