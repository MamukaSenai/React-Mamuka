import { useEffect, useState } from "react";
import Donut  from "../../../components/GraficoDashboard";
import "./style.css"

import api from "../../../utils/api";
import Barras from "../../../components/BarrasDashboard";

export default function Dashboard() {
  const [dados, setDados] = useState<any[]>([]);
  
  useEffect(() => {
    BuscarProjetos()
  }, []);
  
  const BuscarProjetos = async () => {
    await api.get('/projetos')
    .then(response => {
      const filterData = [...dados]

      response.data.forEach( ( obj : any ) => {
        var indexStatus = filterData.findIndex(x => x.status == obj.status_projeto);

        if( indexStatus == -1 ){
          
          filterData.push({
            status : obj.status_projeto,
            contagem : 1
          });
          
        }else{
          filterData[indexStatus].contagem += 1
        }
      });

      setDados( filterData );
    })
  }

  return (
    <>
      <div className="alinhamentogeral">
      <div className="graficobarras configconteudo">
          <Barras listaProjetos={ dados } />
        </div>
        <div className="graficopizza configconteudo">
          <Donut listaProjetos={ dados } />
        </div>
        
      </div>
    </>
  );
}
