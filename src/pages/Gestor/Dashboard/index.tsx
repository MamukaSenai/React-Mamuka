import { useEffect, useState } from "react";
import Donut from "../../../components/GraficoDashboard";
import "./style.css"

import api from "../../../utils/api";
import Barras from "../../../components/BarrasDashboard";

export default function Dashboard() {
  const [dados, setDados] = useState<any[]>([]);
  const [projetos, setProjetos] = useState([]);
  const [projetoSelecionado, setProjetoSelecionado] = useState("");
  const [dados2, setDados2] = useState<any[]>([]);

  useEffect(() => {
    BuscarProjetos();
    fetchProjetos();

  }, []);

  const fetchProjetos = async () => {
    try {
      const response = await api.get(`/projetos/${idUsuario}`);
      const projetos = response.data;

      const nomesProjetos = projetos.map((projeto: any) => projeto.nome_projeto && projeto.id);

      setDados2(nomesProjetos)
      
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };



  const BuscarProjetos = async () => {
    await api.get('/projetos')
      .then(response => {
        const filterData = [...dados]

        response.data.forEach((obj: any) => {
          var indexStatus = filterData.findIndex(x => x.status == obj.status_projeto);

          if (indexStatus == -1) {

            filterData.push({
              status: obj.status_projeto,
              contagem: 1
            });

          } else {
            filterData[indexStatus].contagem += 1
          }
        });

        setDados(filterData);
      })
  }

  return (
    <>
      <div className="alinhamentogeral">

        <div>


          {/* <label htmlFor="ProjetoSelect">Selecione um projeto</label> */}
          <select id="projetoSelect">
            <option value="">Selecione um projeto</option>
            {dados2.map((projeto: any) => (
              <option key={projeto.id} value={projeto.id}>{projeto}</option>
              ))}
          </select>
        


        <div className="graficobarras configconteudo">
          <Barras listaTarefas={dados} />
        </div>
        </div>
        
        <div className="graficopizza configconteudo">
          <Donut listaProjetos={dados} />
        </div>

      </div>
    </>
  );
}
