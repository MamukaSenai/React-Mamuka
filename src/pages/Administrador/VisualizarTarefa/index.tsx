//rotas
import { Link, useParams } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";

//estilização
import "./style.css";

import api from "../../../utils/api"


function VisualizarTarefa() {


    const { idUsuario } = useParams();

    const [nome, setNome] = useState<String>("")
    const [email, setEmail] = useState<String>("")
    const [cpf, setCpf] = useState<string>("");
    const [nascimento, setNascimento] = useState<string>("");
    const [departamento, setDepartamento] = useState<string>("");
    const [cargo, setCargo] = useState<string>("");

    const [tipoUsuario, setTipoUsuario] = useState<string>("");

    const [listaUsuarios, setListasUsuarios] = useState<String[]>([])


    useEffect(() => {
        document.title = "Perfil de" + nome + " - VSConnect"

        buscarUsuarioPorId()
    }, [])



    function buscarUsuarioPorId() {

        api.get("users/" + idUsuario).then((response: any) => {// exiba usuario
            setNome(response.data.nome)
            setEmail(response.data.email)
            setCpf(response.data.cpf)
            setNascimento(response.data.nascimento)
            setDepartamento(response.data.departamento)
            setCargo(response.data.cargo)
            setTipoUsuario(response.data.tipoUsuario)
            

            if (typeof response.data.tipoUsuario === "string") {
                setListasUsuarios(JSON.parse(response.data.tipoUsuario))
            } else {
                setListasUsuarios(response.data.tipoUsuario)
            }

            // setFoto(response.data.user_img)

            // setUf(response.data.uf)
            //setCidade(response.data.cidade)
            // setListaskills(response.data.hardSkills)

        }).catch((error) => {
            console.log(error)
        }) // COMENTEI PARA TESTAR/ DESCOMENTAR DEPOIS
    }


    return (
        <main id="main_perfilusuario">
            <div className="container container_perfil_dev">
                <div className="perfil_dev_conteudo">
                    <h1>{nome}</h1>

                    <div className="topo_dev">
                        {/*  <img src={"http://localhost:3000/static/" + foto} alt={"Foto de perfil de " + nome} />*/}
                        {/* <h2> {nome}</h2> */}
                    </div>

                    <div className="contato_form">
                        <div className="contato_local">

                            <p>Email para contato: {email} </p>
                            <p>Departamento: {departamento}</p>
                            <p>Cargo: { cargo }</p>

                        </div>

                        <div className="contato_local">
                            <p>CPF: { cpf }</p>
                            <p>Nascimento: { nascimento }</p>
                            <p>Tipo de Usuario: { tipoUsuario }</p>
                        </div>
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarTarefa;