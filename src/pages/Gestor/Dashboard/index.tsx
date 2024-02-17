import { useEffect, useState } from "react";
import Donut from "../../../components/GraficoDashboard";
import "./style.css"

import api from "../../../utils/api";
import Barras from "../../../components/BarrasDashboard";

export default function Dashboard() {
  const [projetoSelect, setProjetoSelect] = useState<any>({ })

  const [dados, setDados] = useState<any[]>([]);
  const [projetos, setProjetos] = useState([]);
  const [projetoSelecionado, setProjetoSelecionado] = useState("");
  const [dados2, setDados2] = useState<any[]>([{}]);
  // const [idUsuario, setIdUsuario] = useState<string>("");
  var usuario = localStorage.getItem("idUsuario");
  useEffect(() => {
    // setIdUsuario(aaa);
    // console.log(localStorage.getItem("idUsuario"))
    BuscarProjetos();
    fetchProjetos();

  }, []);

  const fetchProjetos = async () => {
    try {
      const response = await api.get(`/projetos/gestor/${usuario}`);
      const projetos = response.data;

      // const nomesProjetos = projetos.map((projeto: any) => projeto.nome_projeto);

      setDados2( projetos )
      
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };



  const BuscarProjetos = async () => {
    await api.get('/projetos')
      .then(response => {
        const filterData = [...dados]
        
        //fazer esse mesmo filtro, para tarefas
        response.data.forEach((obj: any) => {
          var indexStatus = filterData.findIndex(x => x.status == obj.status_projeto);
          // var indexNomeResponsavel = filterData.findIndex(x => x.responsavel == obj.nome);

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

  const BuscarTarefas = async () => {
    await api.get('/projetos')
    .then(response => {
      const filterData = [...dados]

      response.data.forEach((objtarefa: any) => {
        var indexNomeResponsavel = filterData.findIndex(x => x.nome == objtarefa.nome)


        if() {
          
        }
      })
    }
      )
  }

  return (
    <>
      <div className="alinhamentogeral">

        <div>


          {/* <label htmlFor="ProjetoSelect">Selecione um projeto</label> */}
          <select id="projetoSelect" onChangeCapture={ e => setProjetoSelect(e.target.value) }>
            <option value="">Selecione um projeto</option>
            {
              dados2.map( projeto => (
                <option key={projeto.id} value={projeto.id}>{projeto.nome_projeto}</option>
              ))
            }
          </select>
        


        <div className="graficobarras configconteudo">
          <Barras listaTarefas={dados} projeto={projetoSelect}/>
        </div>
        </div>
        
        <div className="graficopizza configconteudo">
          <Donut listaProjetos={dados} />
        </div>

      </div>
    </>
  );
}
