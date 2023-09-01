
// //rotas
// import { Link, useParams } from "react-router-dom";



// //hooks
// import { useState, useEffect } from "react";

// //estilização
// import "./style.css";


// function PerfilUsuario() {

//   const { idUsuario } = useParams();

//   const [nome, setNome] = useState<string>("")
//   const [foto, setFoto] = useState<string>("")
//   const [email, setEmail] = useState<string>("")
//   const [uf, setUf] = useState<string>("")
//   const [cidade, setCidade] = useState<string>("")
//   const [listaSkills, setListaSkills] = useState<string[]>([])

//   useEffect(() => {
//     document.title = "Perfil de " + nome + " - VSConnect"

//     buscarUsuarioPorId()
//   }, [])

//   function buscarUsuarioPorId() {

//     api.get("users/" + idUsuario).then((response: any) => {
//       setNome(response.data.nome)
//       setFoto(response.data.user_img)
//       setEmail(response.data.email)
//       setUf(response.data.uf)
//       setCidade(response.data.cidade)
//       setListaSkills(response.data.hardSkills)

//       if (typeof response.data.hardSkills === "string") {
//         setListaSkills(JSON.parse(response.data.hardSkills))
//       } else {
//         setListaSkills(response.data.hardSkills)
//       }


//     }).catch((error) => {
//       console.log(error)
//     })



//     return (
//       <>
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Perfil</title>
//         {/* link para carregar os icones */}
//         <link
//           href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
//           rel="stylesheet"
//         />
//         <link rel="stylesheet" href="style.css" />
//         {/* cabecalho */}
//         <header>
//           <div className="menu_sup">
//             <img src="../img/Logo.png" alt="" />
//             <form>
//               <input
//                 className="barra_pesquisa"
//                 type="search"
//                 name="Pesquisa"
//                 id="campo_pesquisa"
//                 placeholder="Pesquisa"
//               />
//             </form>
//             <img src="../img/Ricardo.png" alt="" />
//           </div>
//         </header>
//         {/* https://www.youtube.com/watch?v=wEfaoAa99XY tempo 4.39*/}
//         {/* boxincons.com  Link */}
//         {/* corpo da pagina*/}
//         <aside>
//           {/* BARRA LATERAL */}
//           <div className="sidebar">
//             <div className="logo_content">
//               <img src="../img/MENU.png" alt="" />
//               {/* <i class="bx bx-menu" id="btn"></i> */}
//             </div>
//             <ul className="nav_list">
//               <li>
//                 <a href="#">
//                   {/* <i class="bx bx-grid-alt"></i> */}
//                   <span className="link_name">Projetos</span>
//                 </a>
//                 {/* <span class="tooltip">dashboard</span> */}
//               </li>
//               <li>
//                 <a href="#">
//                   {/* <i class="bx bx-grid-alt"></i> */}
//                   <span className="link_name">Criar Projetos</span>
//                 </a>
//                 {/* <span class="tooltip">dashboard</span> */}
//               </li>
//               <li>
//                 <a href="#">
//                   {/* <i class="bx bx-grid-alt"></i> */}
//                   <span className="link_name">Criar Demandas</span>
//                 </a>
//                 {/* <span class="tooltip">dashboard</span> */}
//               </li>
//             </ul>
//           </div>
//           {/* BARRA LATERAL FIM */}
//         </aside>
//         <main>
//           <span className="Gestor">Gestor/Criar Demandas</span>
//           <div className="container">
//             <form className="formulario">
//               <div className="top_linha1">
//                 <div className="imgfoto">
//                   <img className="pessoaerfil" src="../img/PessoaPerfil.png" alt="" />
//                 </div>
//                 <div className="ladodireito">
//                   <div className="top1">
//                     <div className="inputbox tamanhoNomeEmail">
//                       <label htmlFor="firstname">Nome do projeto:</label>
//                       <input
//                         className="widthh"
//                         type="text"
//                         name="firstname"
//                         placeholder="Laboratório 1"
//                         required=""
//                       />
//                     </div>
//                     <div className="inputbox">
//                       <label htmlFor="ID_do_projeto">ID do projeto:</label>
//                       <input
//                         className="widthh"
//                         type="password"
//                         name="ID_do_projeto"
//                         placeholder="100/23"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                   <div className="top2">
//                     <div className="inputbox tamanhoNomeEmail">
//                       <label htmlFor="e-mail:">E-mail:</label>
//                       <input
//                         className="widthh"
//                         type="text"
//                         name="e-mail:"
//                         placeholder="e-mail"
//                         required=""
//                       />
//                     </div>
//                     <div className="inputbox tamanhoIdStatus">
//                       <label htmlFor="Status:">Status:</label>
//                       <input
//                         className="widthh"
//                         type="text"
//                         name="Status:"
//                         placeholder="Ativo"
//                         required=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="linha1">
//                 <div className="inputbox">
//                   <label htmlFor="Cargo:">Cargo:</label>
//                   <input
//                     className="widthh"
//                     type="text"
//                     name="Cargo:"
//                     placeholder="Gerente"
//                     required=""
//                   />
//                 </div>
//                 <div className="inputbox">
//                   <label htmlFor="Departamento:">Departamento:</label>
//                   <input
//                     className="widthh"
//                     type="text"
//                     name="Departamento:"
//                     placeholder="Financeiro"
//                     required=""
//                   />
//                 </div>
//                 <div className="inputbox tamanhoResponsavel">
//                   <label htmlFor="Responsavel:">Responsavel:</label>
//                   <input
//                     className="widthh"
//                     type="text"
//                     name="Responsavel:"
//                     placeholder="Eduardo Matos"
//                     required=""
//                   />
//                 </div>
//               </div>
//               <div className="linha2">
//                 <div className="inputbox">
//                   <label htmlFor="Perfil:">Perfil:</label>
//                   <input
//                     className="widthh"
//                     type="text"
//                     name="Perfil:"
//                     placeholder=" Administrador"
//                     required=""
//                   />
//                 </div>
//                 <div className="inputbox">
//                   <label htmlFor="Conclusão">Data Integração</label>
//                   <input
//                     className="widthh"
//                     type="date"
//                     name="Inicio:"
//                     placeholder="28/11/2023"
//                     required=""
//                   />
//                 </div>
//                 <div className="inputbox">
//                   <label htmlFor="Pais:">Pais:</label>
//                   <input
//                     className="widthh"
//                     type="text"
//                     name="Pais:"
//                     placeholder="Brasil"
//                     required=""
//                   />
//                 </div>
//                 <div className="inputbox">
//                   <label htmlFor="Cidade:">Cidade:</label>
//                   <input
//                     className="widthh"
//                     type="text"
//                     name="Cidade:"
//                     placeholder="São Paulo"
//                     required=""
//                   />
//                 </div>
//               </div>
//               <div className="top3">
//                 <div className="inputbox">
//                   <label htmlFor="Estado:">Estado:</label>
//                   <input
//                     className="widthh"
//                     type="text"
//                     name="Estado:"
//                     placeholder="São Paulo"
//                     required=""
//                   />
//                 </div>
//                 <div className="inputbox">
//                   <label htmlFor="Localização:">Localização:</label>
//                   <input
//                     className="widthh"
//                     type="text"
//                     name="Localização:"
//                     placeholder="Filial"
//                     required=""
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </main>
//       </>

//     )

//   }
// }

// export default PerfilUsuario;

//import imagens
import Cadrastro from "../../../assets/Cadastro.png";
import Consulta from "../../../assets/Consulta.png";
import Logo from "../../../assets/Logo.png";
import lupa from "../../../assets/lupa.png";
import MENU from "../../../assets/MENU.png";
import PessoalCadastro from "../../../assets/PessoalCadastro.png";
import PessoaPerfil from "../../../assets/PessoaPerfil.png";
import Ricardo from "../../../assets/Ricardo.png";


function PerfilUsuario() {
  return (
      <>
        {/* https://www.youtube.com/watch?v=wEfaoAa99XY tempo 4.39*/}
        {/* boxincons.com  Link */}
        {/* corpo da pagina*/}
        <aside>
          {/* BARRA LATERAL */}
          <div className="sidebar">
            <div className="logo_content">
              <img src={MENU} alt="MENU" />
              {/* <i class="bx bx-menu" id="btn"></i> */}
            </div>
            <ul className="nav_list">
              <li>
                <a href="#">
                  {/* <i class="bx bx-grid-alt"></i> */}
                  <span className="link_name">Projetos</span>
                </a>
                {/* <span class="tooltip">dashboard</span> */}
              </li>
              <li>
                <a href="#">
                  {/* <i class="bx bx-grid-alt"></i> */}
                  <span className="link_name">Criar Projetos</span>
                </a>
                {/* <span class="tooltip">dashboard</span> */}
              </li>
              <li>
                <a href="#">
                  {/* <i class="bx bx-grid-alt"></i> */}
                  <span className="link_name">Criar Demandas</span>
                </a>
                {/* <span class="tooltip">dashboard</span> */}
              </li>
            </ul>
          </div>
          {/* BARRA LATERAL FIM */}
        </aside>
        <main>
          <span className="Gestor">Gestor/Criar Demandas</span>
          <div className="container">
            <form className="formulario">
              <div className="top_linha1">
                <div className="imgfoto">
                  <img className="pessoaerfil" src="../img/PessoaPerfil.png" alt="" />
                </div>
                <div className="ladodireito">
                  <div className="top1">
                    <div className="inputbox tamanhoNomeEmail">
                      <label htmlFor="firstname">Nome do projeto:</label>
                      <input
                        className="widthh"
                        type="text"
                        name="firstname"
                        placeholder="Laboratório 1"
                        required=""
                      />
                    </div>
                    <div className="inputbox">
                      <label htmlFor="ID_do_projeto">ID do projeto:</label>
                      <input
                        className="widthh"
                        type="password"
                        name="ID_do_projeto"
                        placeholder="100/23"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="top2">
                    <div className="inputbox tamanhoNomeEmail">
                      <label htmlFor="e-mail:">E-mail:</label>
                      <input
                        className="widthh"
                        type="text"
                        name="e-mail:"
                        placeholder="e-mail"
                        required=""
                      />
                    </div>
                    <div className="inputbox tamanhoIdStatus">
                      <label htmlFor="Status:">Status:</label>
                      <input
                        className="widthh"
                        type="text"
                        name="Status:"
                        placeholder="Ativo"
                        required=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="linha1">
                <div className="inputbox">
                  <label htmlFor="Cargo:">Cargo:</label>
                  <input
                    className="widthh"
                    type="text"
                    name="Cargo:"
                    placeholder="Gerente"
                    required=""
                  />
                </div>
                <div className="inputbox">
                  <label htmlFor="Departamento:">Departamento:</label>
                  <input
                    className="widthh"
                    type="text"
                    name="Departamento:"
                    placeholder="Financeiro"
                    required=""
                  />
                </div>
                <div className="inputbox tamanhoResponsavel">
                  <label htmlFor="Responsavel:">Responsavel:</label>
                  <input
                    className="widthh"
                    type="text"
                    name="Responsavel:"
                    placeholder="Eduardo Matos"
                    required=""
                  />
                </div>
              </div>
              <div className="linha2">
                <div className="inputbox">
                  <label htmlFor="Perfil:">Perfil:</label>
                  <input
                    className="widthh"
                    type="text"
                    name="Perfil:"
                    placeholder=" Administrador"
                    required=""
                  />
                </div>
                <div className="inputbox">
                  <label htmlFor="Conclusão">Data Integração</label>
                  <input
                    className="widthh"
                    type="date"
                    name="Inicio:"
                    placeholder="28/11/2023"
                    required=""
                  />
                </div>
                <div className="inputbox">
                  <label htmlFor="Pais:">Pais:</label>
                  <input
                    className="widthh"
                    type="text"
                    name="Pais:"
                    placeholder="Brasil"
                    required=""
                  />
                </div>
                <div className="inputbox">
                  <label htmlFor="Cidade:">Cidade:</label>
                  <input
                    className="widthh"
                    type="text"
                    name="Cidade:"
                    placeholder="São Paulo"
                    required=""
                  />
                </div>
              </div>
              <div className="top3">
                <div className="inputbox">
                  <label htmlFor="Estado:">Estado:</label>
                  <input
                    className="widthh"
                    type="text"
                    name="Estado:"
                    placeholder="São Paulo"
                    required=""
                  />
                </div>
                <div className="inputbox">
                  <label htmlFor="Localização:">Localização:</label>
                  <input
                    className="widthh"
                    type="text"
                    name="Localização:"
                    placeholder="Filial"
                    required=""
                  />
                </div>
              </div>
            </form>
          </div>
        </main>
      </>
  )

}

export default PerfilUsuario;

