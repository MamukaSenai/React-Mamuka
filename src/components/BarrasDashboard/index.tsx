import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface Props {
  listaProjetos: Array<any>;
}

const Barras = ({ listaProjetos }: Props) => {
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

    listaProjetos.forEach((projeto) => {
      categories.push(projeto.status);
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

  }, [listaProjetos]);

  return (
    <div className="barras">
      <Chart options={options} series={series} type="bar" height="350" />
    </div>
  );
};

export default Barras;
