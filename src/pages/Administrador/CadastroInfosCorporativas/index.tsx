import "./style.css"
import { Link } from "react-router-dom";

import PessoaCadastro  from "../../../assets/PessoaCadastro.png"

function CadastroInfosCorporativas(){

    return(
        <main id="rightCorporativas">
            <section id="CadastroCorporativas">
                {/* <section class="right"> */}
                <div className="linha_sup_status">
                    <div className="linha_sup_esq">
                    <p>administrador / cadastro</p>
                    </div>
                    <div className="linha_sup_dir">
                    <Link to="/admpessoais" className="destaque2">
                        {/* <a href="#" className="destaque2">
                            pessoal
                        </a> */}
                        pessoal
                    </Link>    
                    <Link to="/admcorporativas" className="destaque">
                        {/* <p class="destaque">corporativo</p> */}
                        {/* <a href="#" className="destaque">
                            corporativo
                        </a> */}
                        corporativo
                    </Link>    
                    <Link to="/admconclusao" className="destaque2">
                        {/* <a href="#" className="destaque2">
                            conclusão
                        </a> */}
                        conclusão
                    </Link>    
                    
                    </div>
                </div>
                <form className="formulario">
                    <div>
                    <img src={PessoaCadastro} alt="" />
                    </div>
                    <div className="label_mail">
                    <label htmlFor="campo-usuario">Perfil:</label>
                    <input placeholder="Administrador" name="usuario" id="campo-usuario" />
                    </div>
                    <div className="label_mail">
                    <label htmlFor="campo-senha">Cargo:</label>
                    <input placeholder="Gerente" name="usuario" id="campo-usuario" />
                    </div>
                    <div className="label_mail">
                    <label htmlFor="campo-senha">Numero Usuario:</label>
                    <input placeholder="987874652023" name="usuario" id="campo-usuario" />
                    </div>
                    <div>
                    <button type="submit">
                        {" "}
                        <Link to="/admconclusao">
                            salvar
                        </Link> 
                        {/* <a href="../cadastro3/cadastro3.html">salvar</a>{" "} */}
                    </button>
                    </div>
                </form>
                {/* </section> */}
            </section>

        </main>

    )
}

export default CadastroInfosCorporativas;