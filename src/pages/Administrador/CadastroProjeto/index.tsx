import "./style.css";

//Hook
import { useState } from "react";

//axios
import api from "../../../utils/api";
import { useParams } from "react-router-dom";
import CardGestor from "../../../components/CardGestor";
import secureLocalStorage from "react-secure-storage";



export default function CadastroProjeto(props: any) {

    secureLocalStorage.getItem("user")

    const id_gestor = "user"
    const [nome_projeto, setNome_projeto] = useState<string>("");
    const [status_projeto, setStatus_projeto] = useState<string>("");
    const [data_inicio, setData_inicio] = useState<string>("");
    const [data_conclusao, setData_conclusao] = useState<string>("");
    //const [responsavel, setResponsavel] = useState<string>("");


    // setID("e1138257-9e56-4951-994c-0fe385a9312b");


    function cadastrarProjeto(event: any) {
        event.preventDefault();

        // console.log("odosdnfisdnfisdjfn");
        

        //só utiliza formData quando tiver arquivos 
        const formData = new FormData();

        //A chave da função do append() precisa ser o mesmo nome_projeto do atributo que api retorna
       
        formData.append("id_gestor", id_gestor);
        formData.append("nome_projeto", nome_projeto);
        formData.append("status_projeto", status_projeto);
        
        // formData.append("data_inicio", data_inicio);
        // formData.append("data_conclusao", data_conclusao);
        formData.append("data_inicio", data_inicio);
        formData.append("data_conclusao", data_conclusao);
        //formData.append("responsavel", responsavel);


        console.log("Chamadaaa da API");


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
                            
                            <div className="card_form" id="formprojeto">
                                    <div className="cad_box_input" id="cardForm">
                                        <label htmlFor="nomeProjeto">Nome do Projeto:</label>
                                        <input
                                            type="text"
                                            id="nomeProjeto"
                                            onChange={(event) => { setNome_projeto(event.target.value) }}
                                            //placeholder="Digite aqui o nome do projeto:"
                                            placeholder="Digite aqui"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input" id="cardForm">
                                        <label htmlFor="statusProjeto">Status:</label>
                                        <input
                                            type="text"
                                            id="statusProjeto"
                                            onChange={(event) => { setStatus_projeto(event.target.value) }}
                                            //placeholder="Digite aqui o status do projeto:"
                                            placeholder="Digite aqui"
                                            required
                                        />
                                    </div>     
                            </div>

                            <div className="card_form" id="formprojeto">
                                    <div className="cad_box_input" >
                                        <label htmlFor="dataInicio">Data de inicio:</label>
                                        <input
                                            type="date"
                                            id="dataInicio"
                                            onChange={(event) => { setData_inicio(event.target.value) }}
                                            placeholder="Digite a data de inicio:"
                                            required
                                        />
                                    </div>
                                    <div className="cad_box_input" >
                                        <label htmlFor="dataConclusao">Data de conclusão:</label>
                                        <input
                                            type="date"
                                            id="dataConclusao"
                                            onChange={(event) => { setData_conclusao(event.target.value) }}
                                            placeholder="Digite data de conclusão:"
                                            required
                                        />
                                    </div>
                                    {/*<div className="cad_box_input" id="cardForm">
                                        <label htmlFor="responsavel">Responsável:</label>
                                        <input
                                            type="text"
                                            id="responsavel"
                                            onChange={(event) => { setResponsavel(event.target.value) }}
                                            //placeholder="Digite aqui o nome do projeto:"
                                            placeholder="Digite aqui"
                                            required
                                        />
                                    </div>*/}
                                    
                                    
                            </div>
           
                        </div>
                        <button type="submit" className="cad_botao" >Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>


    );

}
