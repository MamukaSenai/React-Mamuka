import "./style.css"


import Logo from "../../../assets/logo.png"
import LoginLateralEsquerda from "../../../assets/LoginLateralEsquerda.png"
import mamuca from "../src/assets/Logo.png"









function Login() {
    return (

        <>
            <section className="posicionamento">

                <div className="direita">
                    <img className="mamuca" src="../src/assets/Logo.png" alt="" />
                    <p className="login">login</p>
                    <div className="barata">
                        <p className="betume">Email:</p>
                        <input className="amor" type="text" />
                        <p className="betume">Senha:</p>
                        <input className="amor" type="text" />
                        <p className="pedro">esqueceu sua senha</p>
                        <a className="btn_login" href="#">
                            login
                        </a>
                        <a className="registre-se" href="#">
                            registre-se
                        </a>
                    </div>
                </div>


                <div className="esquerda">
                    <img src="../src/assets/LoginLateralEsquerda.png" alt="" />
                    <p>Bem Vindo</p>
                </div>


            </section>


        </>
    )

}


export default Login;