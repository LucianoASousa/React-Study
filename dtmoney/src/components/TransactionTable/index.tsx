import { Container } from "./style";

export function TransactionTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2024</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 400</td>
                        <td>Casa</td>
                        <td>17/10/2024</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$3.000</td>
                        <td>Desenvolvimento</td>
                        <td>10/01/2024</td>
                    </tr>
                    <tr>
                        <td>Energia</td>
                        <td className="withdraw">- R$750</td>
                        <td>Casa</td>
                        <td>07/03/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
