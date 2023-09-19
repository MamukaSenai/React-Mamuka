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
          <section className="right">
            <div className="conteudo">
              <div className="cadastro">
                <img src={Cadastro} alt="cadastro" />
                <a href="#" className="button">
                  {" "}
                  Cadastre um no usuários
                </a>
              </div>
              <div className="consulta">
                <img src={Consulta} alt="consulta" />
                <a href="" className="button">
                  {" "}
                  Consulte usuários cadastrados
                </a>
              </div>
            </div>
          </section>
        </section>

      </main>
    </>


  )

}

export default Home;