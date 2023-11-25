import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import CardGestor from "../../../components/CardGestor"
import "./style.css"
import api from "../../../utils/api";

export default function ListaDevs(){
    const [devs, setDevs] = useState<any[]>([]);
    
    const [usuarioDigitada, setusuarioDigitada] = useState<string>("");

    const [listaUsuariosFiltrados, setListaUsuariosFiltarados] = useState<any[]> (devs);


    function retornoDevsGeral(event: any){
        if(event.target.value === ""){
            listarUsuarios();
        }
        setusuarioDigitada(event.target.value)
    }


    function buscarPorUsuario(event: any){
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        // testar tipousuario se indica algum erro depois mudar api
        const usuariosFiltrados = devs.filter((dev: any) => dev.tipoUsuario.includes(usuarioDigitada.toLocaleUpperCase()));

        if(usuariosFiltrados.length === 0){
            alert("Nenhum Gestor com esse usuario")
        }else {
            // console.log(usuariosFiltrados);
            

            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            //Criar variavel que recebe o usuariofiltrado
            setDevs(usuariosFiltrados);   
            // console.log("AOPA BOIADA");
        }

    }




    function listarUsuarios(){
         api.get("users").then((response: any) => {
            //console.log(response.data)
            setDevs(response.data)
        })
        .catch((error: any) => {
            console.log("Error ao realizar um requisição:", error);
        })
    }


    useEffect( () => {
        document.title = "VSConnect - Lista devs"
        listarUsuarios()
    }, [])


    return (
        <main id="lista-devs">
        <div className="container container_lista_devs">
            <div className="lista_devs_conteudo">
                <h1>Lista de Usuarios</h1>
                <hr/>
                    <form method="post" onSubmit={buscarPorUsuario}>
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar Usuarios</label>
                            <div className="campo-label">
                                <input type="search" name="campo-busca" id="busca" placeholder="Buscar de Usuarios" onChange={retornoDevsGeral}/>
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>
                            {devs.map((dev: any, index: number) => {
                                return <li key={index}>
                                     <CardGestor 
                                     id={dev.idUsuario}
                                     nome={dev.nome}
                                     email={dev.email}
                                     tipoUsuario={dev.tipoUsuario}
                                     />
                                </li>
                            }
                            )} 
                        </ul>
                    </div>
            </div>
        </div>
    </main>
        
    )
}