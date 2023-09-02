

import Cadastro from "../../../assets/cadastro.png"
import Consulta from "../../../assets/consulta.png"


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
      <i>
        <svg
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
            <img src="../img/Cadastro.png" alt="" />
            <a href="../cadastro1/cadastro1.html" className="button">
              {" "}
              Cadastre um no usuários
            </a>
          </div>
          <div className="consulta">
            <img src="../img/Consulta.png" alt="" />
            <a
              href="../administrador_consulta/administrador_consulta.html"
              className="button"
            >
              {" "}
              Consulte usuários cadastrados
            </a>
          </div>
        </div>
      </section>
    </main>
    <header className="topo">
      <div className="logo">
        <img src="../img/Logo.png" alt="logo" />
      </div>
      <div className="pesquisa">
        {/*<i class="fa-solid fa-magnifying-glass" id="lupa"></i>*/}
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </i>
        <input className="campotexto" type="text" placeholder="Pesquisa" />
      </div>
      <div className="ricardo">
        <img src="../img/Ricardo.png" alt="" />
        {/*<p>Ricardo Souza</p>*/}
        <a href="../perfil_administrador/perfil_administrador.html">
          Ricardo Souza
        </a>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
          </svg>
        </i>
      </div>
    </header>
  </div>
</>

  }

  )


export default Home;