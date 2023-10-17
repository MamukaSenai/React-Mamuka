import './style.css'

// import {useRef, useEffect} from 'react';


export default function DesenvolvedorDemandas() {

    //   const ref = useRef(null);

    //   useEffect(() => {
    //     // 👇️ use a ref (best)
    //     const element2 = ref.current;
    //     console.log(element2);

    //     // 👇️ use document.querySelector()
    //     // should only be used when you can't set a ref prop on the element
    //     // (you don't have access to the element)
    //     const element = document.querySelector('#search_input');
    //     console.log(element);
    //   }, []);
    // const busca = useBusca();

    // useEffect(() => {

    // })
    // let search_input:any = document.querySelector("#search_input");

    // search_input.addEventListener("keyup", function(e:any){
    //   let span_items:any = document.querySelectorAll(".table_body ul li .item .id span");
    //   let search_item:any = e.target.value.toLowerCase();

    //  span_items.forEach(function(item :any){
    //    if(item.textContent.toLowerCase().indexOf(search_item) != -1){
    //       item.closest("li").style.display = "block"
    //    }
    //    else{
    //      item.closest("li").style.display = "none";
    //    }
    //  })

    // });
    return (
        <>

            <div className="wrapper">
                <div className="header">
                    {/* <div className="title">Customer Issue Tracker</div> */}
                    <div className="search_box">
                        <input
                            type="text"
                            id="search_input"
                            placeholder="Filtre utilizando os IDs"
                        />
                    </div>
                </div>
                <div className="table_wrap">
                    <div className="table_header">
                        <ul>
                            <li>
                                <div className="item">
                                    <div className="id">
                                        <span>ID</span>
                                    </div>
                                    <div className="grupo">
                                        <span>Grupo</span>
                                    </div>
                                    <div className="nome">
                                        <span>Nome</span>
                                    </div>
                                    <div className="cronograma">
                                        <span>Cronograma</span>
                                    </div>
                                    <div className="status">
                                        <span>Status</span>
                                    </div>
                                    <div className="responsavel">
                                        <span>Responsável</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="table_body">
                        <ul>
                            <li>
                                <div className="item">
                                    <div className="id">
                                        <span>100/23</span>
                                    </div>
                                    <div className="grupo">
                                        <span>São Caetano 1.34</span>
                                    </div>
                                    <div className="nome">
                                        <span>Laboratorio 1</span>
                                    </div>
                                    <div className="cronograma">
                                        <span className="prazo">Abril/23 - Nov/23</span>
                                    </div>
                                    <div className="ajuste_alinhamento_status">
                                        <div className="status">
                                            <span className="concluido">Concluído</span>
                                        </div>
                                    </div>
                                    <div className="responsavel">
                                        <span>Ricardo Souza</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="id">
                                        <span>101/22</span>
                                    </div>
                                    <div className="grupo">
                                        <span>Vila Mariana 1.09</span>
                                    </div>
                                    <div className="nome">
                                        <span>Laboratorio 2</span>
                                    </div>
                                    <div className="cronograma">
                                        <span className="prazo">Jan/22 - Jun/22</span>
                                    </div>
                                    <div className="ajuste_alinhamento_status">
                                        <div className="status">
                                            <span className="concluido">Concluído</span>
                                        </div>
                                    </div>
                                    <div className="responsavel">
                                        <span>Rodrigo Amaro</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="id">
                                        <span>102/21</span>
                                    </div>
                                    <div className="grupo">
                                        <span>Bras 1.01</span>
                                    </div>
                                    <div className="nome">
                                        <span>Oficina 1</span>
                                    </div>
                                    <div className="cronograma">
                                        <span className="prazo">Jan/23 - Fev/23</span>
                                    </div>
                                    <div className="ajuste_alinhamento_status">
                                        <div className="status">
                                            <span className="cancelado">Cancelado</span>
                                        </div>
                                    </div>
                                    <div className="responsavel">
                                        <span>Paulo Pereira</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="id">
                                        <span>103/23</span>
                                    </div>
                                    <div className="grupo">
                                        <span>Vila Alpina 1.02</span>
                                    </div>
                                    <div className="nome">
                                        <span>Biblioteca 1</span>
                                    </div>
                                    <div className="cronograma">
                                        <span className="prazo">Fev/23 - Nov/23</span>
                                    </div>
                                    <div className="ajuste_alinhamento_status">
                                        <div className="status">
                                            <span className="andamento">Andamento</span>
                                        </div>
                                    </div>
                                    <div className="responsavel">
                                        <span>Hugo Ramos</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="id">
                                        <span>104/22</span>
                                    </div>
                                    <div className="grupo">
                                        <span>São Bernardo 1.20</span>
                                    </div>
                                    <div className="nome">
                                        <span>Secretaria 1</span>
                                    </div>
                                    <div className="cronograma">
                                        <span className="prazo">Jun/22 - Dez/22</span>
                                    </div>
                                    <div className="ajuste_alinhamento_status">
                                        <div className="status">
                                            <span className="concluido">Concluído</span>
                                        </div>
                                    </div>
                                    <div className="responsavel">
                                        <span>Vagner Barros</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="item moises">
                                    <div className="id">
                                        <span>105/23</span>
                                    </div>
                                    <div className="grupo">
                                        <span>Santo Andre 1.18</span>
                                    </div>
                                    <div className="nome">
                                        <span>Processo Seletivo 1</span>
                                    </div>
                                    <div className="cronograma">
                                        <span className="prazo">Fev/23 - Set/23</span>
                                    </div>
                                    <div className="ajuste_alinhamento_status">
                                        <div className="status">
                                            <span className="cancelado">Cancelado</span>
                                        </div>
                                    </div>
                                    <div className="responsavel">
                                        <span>Moises Amparo</span>
                                    </div>
                                </div>
                            </li>
                            {/* <li>
                                <div className="item">
                                    <div className="id">
                                        <span>106/20</span>
                                    </div>
                                    <div className="grupo">
                                        <span>Diadema 1.25</span>
                                    </div>
                                    <div className="nome">
                                        <span>Grade Curricular 2</span>
                                    </div>
                                    <div className="status">
                                        <span className="teste">Set/22 - Out/22</span>
                                    </div>
                                    <div className="status">
                                    <span className="andamento">Andamento</span>
                                    </div>
                                    <div className="responsavel">
                                        <span>Moacir Lima</span>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    <div className="table_footer" />
                </div>
            </div>



        </>
    )

}
