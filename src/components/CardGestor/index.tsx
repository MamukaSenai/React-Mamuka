import { Link } from "react-router-dom"
import "./style.css"

export default function CardGestor (props: any) {
    return (
        <div className="dev">
            <div className="grupo_contato">
                {/* <img src= {"http://localhost:3000/static/" + props.foto} alt="" /> */}
                <div className="contato_dev">
                    <Link to= {"/perfil/" + props.id} >{props.nome}</Link>
                    {/* <h3>{ props.nome }</h3> */}
                    <p>{ props.email }</p>
                    {/* <p>{ props.tipoUsuario }</p> */}
                </div>
            </div>
            
            
            <div className="usuarios">
            {
                props.usuarios.map((tech: string,index: number) => {
                    return <span key={index}>{tech}</span>
                } )
            }
            </div>
            
        </div>
    )
}