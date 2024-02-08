import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface Props {
  listaProjetos : Array<any>
}

const Donut = ( {listaProjetos} : Props ) => {
  const [options, setOptions] = useState<any>({ labels : [], colors:['#FFCB00', '#E44358', '#00CA72']})
  const [series, setSeries] = useState<any>([])
  

  useEffect(() => {
    let testea : any = []
    let testeb : any = []
    listaProjetos.forEach((a) => {
      // options.xaxis.categories.push( a.ano )
      testea.push( a.status )
      testeb.push( a.contagem )
    }); 
    setOptions({ ... options, labels : testea })
    setSeries(testeb)
    
    console.log(listaProjetos);
    
  }, [listaProjetos])

  

  return (
    
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
}

export default Donut
