import "./style.css"
// import PieChart from "../../../components/GraficoDashboard";
// import Pies from "../../../components/GraficoDashboard";
import Bars from "../../../components/BarrasDashboard";
import Donut from "../../../components/GraficoDashboard";
import { useEffect, useState } from "react";
import api from "../../../utils/api";


interface UserData {
  id: number;
  nome_projeto: string;
  data_inicio: string;
  data_conclusao: string;
  status_projeto: string;
  gestor: any;
}



useEffect(() => {
  api.get('/projetos')
    .then(response => {
      setDados(response.data);
    })
    .catch(error => {
      console.error("A conexão falhou =/", error);
    });
}, []);

export default function Dashboard() {
  const [dados, setDados] = useState<UserData[]>([]);
  const enviarDados = () => {
  }
  return (
    <>
      <div className="alinhamentogeral">
        {/* <div className="graficobarras configconteudo">
          <Bars />
        </div> */}
        <div className="graficopizza configconteudo">
          {/* <Pies /> */}
          <Donut />

        </div>
      </div>
    </>
  );
}
