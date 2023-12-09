import { Link } from "react-router-dom"
import "./style.css"

export default function CardProjeto(props: any) {
    return (
        <div className="projeto">
            <div className="grupo_projetos">
                {/* <img src= {"http://localhost:3000/static/" + props.foto} alt="" /> */}
                <div className="contato_dev">
                    <Link className="contato_dev_nome" to={"/tarefas/" + props.id} >{props.nomeTarefa}</Link>
                    {/* <h3>{ props.nome }</h3> */}
                    <p>Status do Projeto: {props.statusProjeto}</p>
                    <p>Data de Inicio: {props.dataInicio}</p>
                    <p>Data de Conclusão: {props.dataConclusao}</p>
                </div>
            </div>
        </div>
    )
}