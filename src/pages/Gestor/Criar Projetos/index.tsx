import "./style.css";



function criarProjetos() {



    
    return (
        <>
            <main>
                <span className="gestor">Gestor/Criar Projetos</span>
                <section className="right">
                    <div className="container">
                        <form className="formulario">
                            <section>
                                <div className="input-box">
                                    <label htmlFor="firstname">Nome:</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder=" Laboratório 1"
                                        // required= {}
                                    />
                                </div>
                                <div className="linha1">
                                    <div className="input-box">
                                        <label htmlFor="ID_do_projeto">Status:</label>
                                        <input
                                            type="password"
                                            name="ID_do_projeto"
                                            placeholder=" Andamento"
                                            // required= {}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Status:">ID:</label>
                                        <input
                                            type="text"
                                            name="Status:"
                                            placeholder=" 100/23"
                                            // required= {}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Responsáveis">Grupo:</label>
                                        <input
                                            type="text"
                                            name="Fase:"
                                            placeholder=" São Caetano 1.34"
                                            // required={}
                                        />
                                    </div>
                                </div>
                                <div className="linha2">
                                    <div className="input-box">
                                        <label htmlFor="Conclusão">Inicio:</label>
                                        <input
                                            type="date"
                                            name="Inicio:"
                                            placeholder=" 28/11/2023"
                                            // required={}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Conclusão">Conclusão:</label>
                                        <input
                                            type="date"
                                            name="Conclusão"
                                            placeholder=" 28/11/2023"
                                            // required={}
                                        />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="Gestor_do_projeto">Gestor do projeto:</label>
                                        <input
                                            type="text"
                                            name="Gestor do projeto"
                                            placeholder=" Ricardo Souza"
                                            // required={}
                                        />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label htmlFor="Responsáveis">Descrição:</label>
                                    <textarea
                                        name="text"
                                        cols={20}
                                        rows={8}
                                        placeholder=" Este projeto consistiu no desenvolvimento de uma aplicação mobile Android e iOS, para gestão de estacionamentos,em tecnologia C# .Net OutSystems (plataforma de low-code), bem como de BackEnd em tecnologia PHP WordPress, para suporte as operações."
                                        // required={}
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="continue-button">
                                    <button>Criar</button>
                                </div>
                            </section>
                        </form>
                    </div>
                </section>
            </main>

        </>


    )


}

export default criarProjetos;