import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface Props {
  listaTarefas: Array<any>;
}

const Barras = ({ listaTarefas}: Props) => {
  const [options, setOptions] = useState<any>({
    plotOptions: {
      bar: {
        vertical: true,
      },
    },
    xaxis: {
      categories: [],
    },
    //precisa fazer com que ele pegue varias cores, no momento está pegando só a primeira
    colors:['#FFCB00', '#E44358', '#00CA72']
  });
  const [series, setSeries] = useState<any>([]);

  useEffect(() => {
    let categories: any = [];
    let data: any = [];

    listaTarefas.forEach((projeto) => {
      categories.push(projeto.nome);
      data.push(projeto.contagem);
      
    });

    setOptions({
      ...options,
      xaxis: {
        categories: categories,
      },
    });
    setSeries([
      {
        data: data,
      },
    ]);

  }, [listaTarefas]);

  return ( 
    <div className="barras">
      <Chart options={options} series={series} type="bar" height="350" />
    </div>
  );
};

export default Barras;
