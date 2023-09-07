
import BotaoDropDown from "../BotaoDropDown";
import "./style.css"
// imports da função de dropdown do bootstrap


export default function Aside() {
    return (
        <>
            <aside>
                <nav className="menu">
                    {/* <div onClick={BotaoDropDown()}></div> */}
                <BotaoDropDown />
                </nav>

                {/* <div className="testess">
                    Teste
                    Teste
                    Teste
                    Teste
                </div> */}
            </aside>
        </>
    );
}