import "./style.css";

//Hook
import { useEffect, useState } from "react";

//axios
import api from "../../../utils/api";



export default function CadastroTarefa(props: any) {
    const [projetoSelect, setProjetoSelect] = useState<any>({});
    const [dados, setDados] = useState<any[]>([]);
    const [dados2, setDados2] = useState<any[]>([{}]);
    const [nome_tarefa, setNome_tarefa] = useState<string>("");
    const [status_tarefa, setStatus_tarefa] = useState<string>("");
    const [data_inicio, setData_inicio] = useState<string>("");
    const [data_conclusao, setData_conclusao] = useState<string>("");
    var usuario = localStorage.getItem("idUsuario");
    useEffect(() => {
        fetchProjetosparaCadastroTarefa();
    }, []);

    function cadastrarProjeto(event: any) {
        event.preventDefault();


        //só utiliza formData quando tiver arquivos 
        const formData = {
            "id_responsavel": usuario,
            "id_projeto": projetoSelect,
            "nome_tarefa": nome_tarefa,
            "status_tarefa": status_tarefa,
            "data_inicio": data_inicio,
            "data_conclusao": data_conclusao

        };

        console.log("chamada da API");

        api.post("/tarefas", formData).then((response) => {
            console.log(response)
            alert("Tarefa criada com sucesso! 😊🤗")
        }).catch((error) => {
            console.log(error)
        })
    }

    const fetchProjetosparaCadastroTarefa = async () => {
        try {
          const response = await api.get(`/projetos/gestor/${usuario}`);
          const projetos = response.data;
    
          // const nomesProjetos = projetos.map((projeto: any) => projeto.nome_projeto);
    
          setDados2( projetos )
          
        } catch (error) {
          console.error("Erro ao buscar projetos:", error);
        }
      };
    
    return (
        <main className="main_cadastro">
            <div className="container_cad">
                <div className="cad_conteudo">
                    <h1>Cadastro de Tarefa</h1>
                    <hr />
                    <form onSubmit={cadastrarProjeto} className="cad_formulario" method="POST">

                        <div className="card_box_org">


                    
                            <div className="card_form" id="formtarefa">
                                <div className="cad_box_input" id="cardForm">
                                    <label htmlFor="nome_tarefa">Nome da Tarefa:</label>
                                    <input
                                        type="text"
                                        id="nome_tarefa"
                                        onChange={(event) => { setNome_tarefa(event.target.value) }}
                                        placeholder="Digite aqui"
                                        required
                                    />
                                </div>
                                <div className="cad_box_input" id="cardForm">
                                    <label htmlFor="status_tarefa">Status:</label>
                                    <input
                                        type="text"
                                        id="status_tarefa"
                                        onChange={(event) => { setStatus_tarefa(event.target.value) }}
                                        placeholder="Digite aqui"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="card_form" id="formtarefa">
                                <div className="cad_box_input">
                                    <label htmlFor="data_inicio">Data de inicio:</label>
                                    <input
                                        type="date"
                                        id="data_inicio"
                                        onChange={(event) => { setData_inicio(event.target.value) }}
                                        placeholder="Digite a data de inicio:"
                                        required
                                    />
                                </div>
                                <div className="cad_box_input">
                                    <label htmlFor="data_conclusao">Data de conclusão:</label>
                                    <input
                                        type="date"
                                        id="data_conclusao"
                                        onChange={(event) => { setData_conclusao(event.target.value) }}
                                        placeholder="Digite data de conclusão:"
                                        required
                                    />
                                </div>

                                {/* SELECT PARA BUSCAR PROJETOS */}
                                <select className="cad_box_input" id="projetoSelect_cadastroTarefa" onChangeCapture={e => setProjetoSelect(e.target.value)}>
                                <option value="">Selecione</option>
                                {
                                    dados2.map(projeto => (
                                        <option key={projeto.id} value={projeto.id}>{projeto.nome_projeto}</option>
                                    ))
                                }
                                </select>



                            </div>

                        </div>
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>


    );

}
