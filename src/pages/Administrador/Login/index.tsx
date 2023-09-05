import ".style.css"
import { useState } from "react"
import Login from './pagens login'
// import { useNavigate } from "react-router-dom";
// import api from "../../utils/api";

// import secureLocalStorage from "react-secure-storage"

// import { useState } from "react";


// import { useNavigate } from "react-router-dom";


function Login(event:any) {

    const [email, setEmeil] = useState<string>("")
    const [senha, SetSenha] = useState<string>("")
    const navigate = useNavigate()

function fazerlogin(event: any) {

    event.preventDefault()
}
// const usuario: object = {
//     email: email,
//     password: senha,
// }

// console.log(email, senha)

// api.post("login", usuario).then((response) => ){

//     console.log(response)

//     secureLocalStorage.setItem("user", response.data)

//     navigate("/Login/" + response.data.user.id)


//     // recarrega a pagina

//     navigate(0)

// }


    return (

        <>
            <section className="posicionamento">
                <div className="direita">
                    <img className="mamuca" src="imag/image 1 (Traced).png" alt="" />
                    <p className="login">login</p>
                    <form onSubmit={fazerlogin} className="login_formulario" method="POST"/>
                    </div>
                        <div className="barata">
                            <p className="betume">email</p>
                            <input className="amor" type="e-mail" />
                            <form onSubmit={Digite seu emeil}className = "email_Formulario"method="POST"/>
                            <p className="betume">senha</p>
                            <input className="amor" type="senha" />
                            <form OnSubmit={Digite sua senha}className="senha_Formulario"method="POST"/>
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
                    <img src="imag/Imagem Login_05 1.png" alt="" />
                    <p>Bem Vindo</p>
                </div>
        </>


    );
}

export default Login;
                                          
                            
                            
                            
                            
                            
                    
                           