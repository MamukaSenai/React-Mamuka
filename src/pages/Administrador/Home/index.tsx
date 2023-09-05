import Cadastro from "..//..//../assets/cadastro.png"
import Consulta from "..//..//../assets/consulta.png"


// import Consulta from "../../../assets/consulta.png"


//rotas
// import { Link, useParams } from "react-router-dom";

//hooks
// import { useState, useEffect } from "react";

//estilizacao
import "style.css";

function Home() {

  return (
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Administrador Home</title>
  <link rel="stylesheet" href="administrador_home.css" />
  <aside>
    <nav className="menu">
      <i><svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </i>
      <a href="../cadastro1/cadastro1.html">Cadastro</a>
      {/* <p>Consulta</p> <a href="#">Consulta</a>  <button><a href="#">Consulta</a></button> */}
      <a href="../administrador_consulta/administrador_consulta.html">
        Consulta
      </a>
    </nav>
  </aside>
  <div className="right">
    <main>
      <section className="right">
        <div className="conteudo">
          <div className="cadastro">
            <img src={Cadastro} alt="cadastro" />
            <a href="..//..//../assets/cadastro.png" className="button">
              {" "}
              Cadastre um no usuários
            </a>
          </div>
          <div className="consulta">
            <img src={Consulta} alt="consulta" />
            <a href="..//..//../assets/consulta.png" className="button">
              {" "}
              Consulte usuários cadastrados
            </a>
          </div>
        </div>
      </section>
    </main>

  </div>
</>


)

}

export default Home();