import { Link } from "react-router-dom";
import Cadastro from "../../../assets/Cadastro.png"
import Consulta from "../../../assets/Consulta.png"


// import Consulta from "../../../assets/consulta.png"

//rotas
// import { Link, useParams } from "react-router-dom";

//hooks
// import { useState, useEffect } from "react";

//estilizacao
import "./style.css";

function Home() {

  return (
    <>

      <main id="right_home">
        <section id="Home">
           {/* <div className="conteudo" id="conteudo_Home"> */}
            <div className="conteudo">
              <div className="cadastro">
                <img className="imgcadastro" src={Cadastro} alt="cadastro" />

                <Link to="/cadastro/usuario" className="button">
                  Cadastre os usuários
                </Link>
                
              </div>
              <div className="consulta">
                <img className="imgconsulta" src={Consulta} alt="consulta" />
                  <Link to="/listadevs" className="button">
                  Consulte usuários cadastrados
                </Link>
                
              </div>
            </div>
        </section>

      </main>
    </>


  )

}

export default Home;