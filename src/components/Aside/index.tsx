/* Fazer com que quando o usuario clicar no dropdown,
 ele preencha o aside com o background azul escuro */

/* Tentar fazer um onClick no index.tsx e depois estilizar no css */
/* Talvez a função tenha que ser separada, ou seja, faço a função do DropDown e depois
coloco ela na função do Aside, assim, acho que consigo fazer com onClick */

import "./style.css"
// imports da função de dropdown do bootstrap
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import do react icons
import { BsList } from 'react-icons/bs';

//Função do DropDown
function  BotaoDropDown() {
    return (
        <>
            {/* <aside>
                <nav className="menu"> */}
                    {/* Abaixo temos a função do bootstrap que faz o Dropdown */}
                    <DropdownButton id="dropdown-basic-button" title={
                        <span>
                            {/* Colocando o Icone Hamburguer da Biblioteca do React Icons */}
                            <BsList className="botaoHamburguer" />
                        </span>
                    }>
                        <div className="conteudoDropDown">
                            {/* Abaixo temos as páginas que vão ter no dropdowm */}
                            <Dropdown.Item href="#/action-1">Consulta</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cadastro</Dropdown.Item>
                        </div>
                    </DropdownButton>
                {/* </nav>
            </aside> */}
        </>
    );
}


export default function Aside() {
    return (
        <>
            <aside>
                <nav className="menu">
                    {/* <div onClick={BotaoDropDown()}></div> */}
                    {BotaoDropDown()}
                </nav>
            </aside>
        </>
    );
}