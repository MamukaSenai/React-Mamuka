import "./style.css";
import { Link } from "react-router-dom";

import PessoaCadastro from "../../../assets/PessoaCadastro.png"

function CadastroInfosPessoais() {
    return (
        <main id="rightPessoais">
            <section id="CadastroPessoais">
                {/* <section class="right"> */}
                <div className="linha_sup_status">
                    <div className="linha_sup_esq">
                        <p>administrador / cadastro</p>
                    </div>
                    <div className="linha_sup_dir">
                        {/* <p class="destaque">pessoal</p> */}
                        <Link to="/admpessoais" className="destaque">
                            {/* <a href="#" >
                                pessoal
                            </a> */}
                            pessoal
                        </Link>

                        <Link to="/admcorporativas" className="destaque2">
                            {/* <a href="#" className="destaque2">
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
                        <label htmlFor="campo-usuario">Nome:</label>
                        <input placeholder="Ricardo Souza" name="usuario" id="campo-usuario" />
                    </div>
                    <div className="label_mail">
                        <label htmlFor="campo-senha">Data de nascimento:</label>
                        <input placeholder="12/10/1980" name="usuario" id="campo-usuario" />
                    </div>
                    <div className="label_mail">
                        <label htmlFor="campo-senha">CPF:</label>
                        <input placeholder="211.235.632.23" name="usuario" id="campo-usuario" />
                    </div>
                    <div>
                        <button type="submit">
                            {" "}
                            <Link to="/admcorporativas">
                                salvar
                            </Link>
                            {/* <a href="../cadastro2/cadastro2.html">salvar</a>{" "} */}
                        </button>
                    </div>
                </form>
                {/* </section> */}
            </section>
        </main>


    )
}
export default CadastroInfosPessoais;