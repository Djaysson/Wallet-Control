import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export default function TransactionsTable() {
  const [first, setfirst] = useState();

  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
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
            <td>24/03/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$450</td>
            <td>casa</td>
            <td>04/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
