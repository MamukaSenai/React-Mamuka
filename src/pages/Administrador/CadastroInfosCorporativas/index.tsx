import "./style.css"

function CadastroInfosConclusao(){

    return(
        <main>
            {/* <section class="right"> */}
            <div className="linha_sup_status">
                <div className="linha_sup_esq">
                <p>administrador / cadastro</p>
                </div>
                <div className="linha_sup_dir">
                <a href="../cadastro1/cadastro1.html" className="destaque2">
                    pessoal
                </a>
                {/* <p class="destaque">corporativo</p> */}
                <a href="../cadastro2/cadastro2.html" className="destaque">
                    corporativo
                </a>
                <a href="../cadastro3/cadastro3.html" className="destaque2">
                    conclusão
                </a>
                </div>
            </div>
            <form className="formulario">
                <div>
                <img src="../img/PessoaCadastro.png" alt="" />
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
                    <a href="../cadastro3/cadastro3.html">salvar</a>{" "}
                </button>
                </div>
            </form>
            {/* </section> */}
        </main>

    )
}

export default CadastroInfosConclusao;