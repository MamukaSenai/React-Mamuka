import "./style.css";

//Hook
import { useState } from "react";

//axios
import api from "../../../utils/api";




export default function CadastroProjeto(props: any) {


    const [nomeProjeto, setNomeProjeto] = useState<string>("");
    const [statusProjeto, setStatusProjeto] = useState<string>("");
    const [dataInicio, setDataInicio] = useState<string>("");
    const [dataConclusao, setDataConclusao] = useState<string>("");
    const [responsavel, setResponsavel] = useState<string>("");


    function cadastrarProjeto(event: any) {
        event.preventDefault();

        console.log("odosdnfisdnfisdjfn");
        

        //só utiliza formData quando tiver arquivos 
        const formData = new FormData();

        //A chave da função do append() precisa ser o mesmo nome_projeto do atributo que api retorna
       

        formData.append("nome_projeto", nomeProjeto);
        formData.append("status_projeto", statusProjeto);
        
        formData.append("dataInicio", dataInicio);
        formData.append("data_conclusao", dataConclusao);
        formData.append("responsavel", responsavel);


        console.log("chamadaaa API");
        

        api.post("/projetos", formData).then((response) => {
            console.log(response)
            alert("Projeto criado com sucesso! 😊🤗")
            // Navegação para login
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <main className="main_cadastro">
            <div className="container_cad">
                <div className="cad_conteudo">
                    <h1>Cadastro de Projeto</h1>
                    <hr />
                    <form onSubmit={cadastrarProjeto} className="cad_formulario" method="POST">
                        <div className="card_box_org">
                            
                            <div className="card_form">
                                    <div className="cad_box_input">
                                        <label htmlFor="nome_projeto">Nome do Projeto:</label>
                                        <input
                                            type="text"
                                            id="nome_projeto"
                                            onChange={(event) => { setNomeProjeto(event.target.value) }}
                                            placeholder="Digite aqui o nome do projeto:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="status_projeto">Status do Projeto:</label>
                                        <input
                                            type="text"
                                            id="status_projeto"
                                            onChange={(event) => { setStatusProjeto(event.target.value) }}
                                            placeholder="Digite aqui o status do projeto:"
                                            required
                                        />
                                    </div>     
                            </div>

                            <div className="card_form">
                                    <div className="cad_box_input">
                                        <label htmlFor="data_inicio">Data de inicio:</label>
                                        <input
                                            type="date"
                                            id="data_inicio"
                                            onChange={(event) => { setDataInicio(event.target.value) }}
                                            placeholder="Digite a data de inicio:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="data_conclusao">Data de conclusão::</label>
                                        <input
                                            type="date"
                                            id="data_conclusao"
                                            onChange={(event) => { setDataConclusao(event.target.value) }}
                                            placeholder="Digite data de conclusão:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input">
                                        <label htmlFor="responsavel">Nome do responsavel:</label>
                                        <input
                                            type="text"
                                            id="responsavel"
                                            onChange={(event) => { setResponsavel(event.target.value) }}
                                            placeholder="Digite aqui o nome do projeto:"
                                            required
                                        />
                                    </div>
                                    
                                    
                            </div>
           
                        </div>
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>


    );

}
