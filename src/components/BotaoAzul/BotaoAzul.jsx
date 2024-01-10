import React from "react";
import './BotaoAzul.scss'

function BotaoAzul(props) {
    return (
        <div id="botao-azul">
            <div className="texto">{props.texto}</div>
            <div className="icone">{props.icone}</div>
        </div>
    )
}

export default BotaoAzul;