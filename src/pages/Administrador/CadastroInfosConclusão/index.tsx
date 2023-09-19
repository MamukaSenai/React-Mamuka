import "./style.css"
import PessoaCadastro  from "../../../assets/PessoaCadastro.png"

function CadastroInfosConclusao() {

    return (
        <main id="rightConclusao">
            <section id="CadastroConclusao">
                <div className="linha_sup_status">
                    <div className="linha_sup_esq">
                        <p>administrador / cadastro</p>
                    </div>
                    <div className="linha_sup_dir">
                        {/* <p>pessoal</p>  */}
                        <a href="../cadastro1/cadastro1.html" className="destaque2">
                            pessoal
                        </a>
                        {/* <p>corporativo</p> */}
                        <a href="../cadastro2/cadastro2.html" className="destaque2">
                            corporativo
                        </a>
                        {/* <p class="destaque">conclusao</p> */}
                        <a href="../cadastro3/cadastro3.html" className="destaque">
                            conclusão
                        </a>
                    </div>
                </div>
                <form className="formulario">
                    <div>
                        <img src={PessoaCadastro} alt="" />
                    </div>
                    <div className="label_mail">
                        <label htmlFor="campo-usuario">E-mail:</label>
                        <input
                            placeholder="ricardosouza1980@gmail.com"
                            name="usuario"
                            id="campo-usuario"
                        />
                    </div>
                    <div className="label_mail">
                        <label htmlFor="campo-senha">Confirme o E-mail:</label>
                        <input
                            placeholder="ricardosouza1980@gmail.com"
                            name="usuario"
                            id="campo-usuario"
                        />
                    </div>
                    <div>
                        <button type="submit">
                            {" "}
                            <a href="../cadastro3/cadastro3.html">salvar</a>{" "}
                        </button>
                    </div>
                </form>
                {/* </section> */}
            </section>
        </main>
        

    )
}

export default CadastroInfosConclusao;