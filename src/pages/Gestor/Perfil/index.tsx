

//rotas
// import { Link, useParams } from "react-router-dom";

//hooks
// import { useState, useEffect } from "react";

//estilização
import "./style.css";


//import imagens
import MENU from "../../../assets/MENU.png";
import PessoaPerfil from "../../../assets/PessoaPerfil.png";
import React from "react";



function GestorPerfil() {

  // const [] = useState<>("")
  // const [] = useState<>("")
  // const [] = useState<>("")
  // const [] = useState<>("")

  return (

    <main>
  <div className="sinalizacao">
    <p>Gestor/perfil</p>
  </div>
  <section className="perfil_geral configconteudo">
    <div className="conteudo_topo">
      <img src={PessoaPerfil} />
      <div className="input1 input_style">
        <div className="att">
          <div className="s1 padrao_input">
            <div className="att">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ricardo Souza"
              />
            </div>
            <div className="att x1">
              <label htmlFor="id">ID:</label>
              <input type="text" name="id" id="id" placeholder="899878321" />
            </div>
          </div>
          <div className="s2 padrao_input">
            <div className="att">
              <label htmlFor="email">E-mail:</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="ricardosouza1980@gmail.com"
              />
            </div>
            <div className="att x1">
              <label htmlFor="status">Status:</label>
              <input
                type="text"
                name="status"
                id="status"
                placeholder="Ativo"
              />
            </div>
          </div>
        </div>
        {/* <div class="input2 input_style">
              <label for="email">E-mail:</label>
              <input type="text" name="email" id="email" placeholder="ricardosouza1980@gmail.com">

              <label for="status">Status:</label>
              <input type="text" name="status" id="status" placeholder="Ativo"> */}
      </div>
    </div>
    <div className="conteudo">
      <div className="input3 input_style padrao_input">
        <div className="att">
          <label className="textos" htmlFor="cargo">
            Cargo:
          </label>
          <input
            className="alinhamento"
            type="text"
            name="cargo"
            id="cargo"
            placeholder="Gerente"
          />
        </div>
        <div className="att x2">
          <label className="textos" htmlFor="depart">
            Departamento:
          </label>
          <input
            className="alinhamento"
            type="text"
            name="depart"
            id="depart"
            placeholder="Financeiro"
          />
        </div>
        <div className="att x3">
          <label className="textos" htmlFor="resp">
            Responsável:
          </label>
          <input
            className="alinhamento"
            type="text"
            name="resp"
            id="resp"
            placeholder="Eduardo Matos"
          />
        </div>
      </div>
      <div className="input4 input_style padrao_input">
        <div className="att x4perfil">
          <label className="textos" htmlFor="perfil">
            Perfil:
          </label>
          <input
            className="alinhamento"
            type="text"
            name="perfil"
            id="perfil"
            placeholder="Administrador"
          />
        </div>
        <div className="att x4 integ">
          <label className="textos" htmlFor="datai">
            Data integração:
          </label>
          <input
            className="alinhamento"
            type="text"
            name="datai"
            id="datai"
            placeholder="23/02/2023"
          />
        </div>
        <div className="att x5">
          <label className="textos" htmlFor="pais">
            País:
          </label>
          <input
            className="alinhamento"
            type="text"
            name="pais"
            id="pais"
            placeholder="Brasil"
          />
        </div>
        <div className="att x4">
          <label className="textos" htmlFor="cidade">
            Cidade:
          </label>
          <input
            className="alinhamento"
            type="text"
            name="cidade"
            id="cidade"
            placeholder="São Paulo"
          />
        </div>
      </div>
      <div className="input5 input_style padrao_input">
        <div className="att x4">
          <label className="textos" htmlFor="estado">
            Estado:
          </label>
          <input
            className="alinhamento"
            type="text"
            name="estado"
            id="estado"
            placeholder="São Paulo"
          />
        </div>
        <div className="att x4local">
          <label className="textos" htmlFor="local">
            Localização:
          </label>
          <input
            className="alinhamento"
            type="text"
            name="local"
            id="local"
            placeholder="Filial"
          />
        </div>
      </div>
    </div>
  </section>
</main>

   
      
  )

}

export default GestorPerfil;