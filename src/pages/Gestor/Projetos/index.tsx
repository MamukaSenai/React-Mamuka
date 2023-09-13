import './style.css'


function GestorProjetos (){

    return(
        <>
            <main>
                <div className="link">
                    {" "}
                    <p>Gestor/ Projetos</p>{" "}
                </div>
                <section className="right">
                    <div className="header_fixed">
                    <table>
                        <thead>
                        <tr>
                            <th>
                            <img src="#" alt="" />
                            </th>
                            <th>ID</th>
                            <th>Grupo</th>
                            <th>Nome</th>
                            <th>Cronograma</th>
                            <th>Status</th>
                            <th>Responsável</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 256 512"
                            >
                                {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                            </td>
                            <td>100/23</td>
                            <td>São Caetano 1.34</td>
                            <td>Laboratorio 1</td>
                            <td>
                            <button className="btn">Abril/23 - Nov/23</button>
                            </td>
                            <td className="andamento">Andamento</td>
                            <td>Ricardo Souza</td>
                        </tr>
                        <tr>
                            <td>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 256 512"
                            >
                                {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                            </td>
                            <td>101/22</td>
                            <td>Vila Mariana 1.09</td>
                            <td>Laboratorio 2</td>
                            <td>
                            <button className="btn">Jan/22 - Jun/22</button>
                            </td>
                            <td className="concluido">Concluído</td>
                            <td>Rodrigo Amaro</td>
                        </tr>
                        <tr>
                            <td>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 256 512"
                            >
                                {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                            </td>
                            <td>102/21</td>
                            <td>Brás 1.01</td>
                            <td>Oficina 1</td>
                            <td>
                            <button className="btn">Jan/23 - Fev/23</button>
                            </td>
                            <td className="cancelado">Cancelado</td>
                            <td>Paulo Pereira</td>
                        </tr>
                        <tr>
                            <td>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 256 512"
                            >
                                {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                            </td>
                            <td>103/23</td>
                            <td>Vila Alpina 1.02</td>
                            <td>Biblioteca 1</td>
                            <td>
                            {" "}
                            <button className="btn">Fev/23 - Nov/23</button>
                            </td>
                            <td className="andamento">Andamento</td>
                            <td>Hugo Ramos</td>
                        </tr>
                        <tr>
                            <td>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 256 512"
                            >
                                {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                            </td>
                            <td>104/22</td>
                            <td>São Bernardo 1.20</td>
                            <td>Secretaria 1</td>
                            <td>
                            <button className="btn">Jun/22 - Dez/22</button>
                            </td>
                            <td className="concluido">Concluído</td>
                            <td>Vagner Barros</td>
                        </tr>
                        <tr>
                            <td>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 256 512"
                            >
                                {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                            </td>
                            <td>105/23</td>
                            <td>Santo Andre 1.18</td>
                            <td>Processo Seletivo 1</td>
                            <td>
                            <button className="btn">Fev/23 - Set/23</button>
                            </td>
                            <td className="andamento">Andamento</td>
                            <td>Moises Amparo</td>
                        </tr>
                        <tr>
                            <td>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 256 512"
                            >
                                {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                            </svg>
                            </td>
                            <td>106/20</td>
                            <td>Diadema 1.25</td>
                            <td>Grade Curricular 2</td>
                            <td>
                            <button className="btn">Set/22 - Out/22</button>
                            </td>
                            <td className="cancelado">Cancelado</td>
                            <td>Moacir Lima</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </section>
            </main>

        
        </>
    )

}

export default GestorProjetos;