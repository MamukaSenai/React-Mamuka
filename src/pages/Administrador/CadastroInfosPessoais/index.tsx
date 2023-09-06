

function CadastroInfosPessoais (){
    return (
        <main>
                {/* <section class="right"> */}
                <div className="linha_sup_status">
                    <div className="linha_sup_esq">
                    <p>administrador / cadastro</p>
                    </div>
                    <div className="linha_sup_dir">
                    {/* <p class="destaque">pessoal</p> */}
                    <a href="../cadastro1/cadastro1.html" className="destaque">
                        pessoal
                    </a>
                    <a href="../cadastro2/cadastro2.html" className="destaque2">
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
                        <a href="../cadastro2/cadastro2.html">salvar</a>{" "}
                    </button>
                    </div>
                </form>
                {/* </section> */}
        </main>

    )
}
export default CadastroInfosPessoais;