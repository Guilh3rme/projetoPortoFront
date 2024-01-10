import React, { useState } from "react";
import './TabelaTopo.scss';

function TabelaTopo() {
    const [filterUp, setFilterUp] = useState(false)
    const [filterDown, setFilterDown] = useState(false)
    const [index, setIndex] = useState(1)
    const [filterIcon, setFilterIcon] = useState("fa-solid fa-sort")
    function handleClick() {
        if (index < 2) {
            setIndex((prevValue) => prevValue + 1)
        } else {
            setIndex(0)
        }

        if (index === 1) {
            setFilterIcon("fa-solid fa-sort-down")
        } else if (index === 2) {
            setFilterIcon("fa-solid fa-sort-up")
        } else if (index === 0) {
            setFilterIcon("fa-solid fa-sort")
        }
    }

    return (
        <div className="topo-tabela">
            <input type="radio" name="radio-topo" id="radio-topo" />
            <div className="coluna-titulo">
                <p>Imagem</p>
            </div>
            <div className="coluna-titulo" onClick={handleClick}>
                <p>Nome</p>
                <i class={filterIcon}></i>
            </div>
            <div className="coluna-titulo" onClick={handleClick}>
                <p>Data de Adição</p>
                <i class={filterIcon}></i>
            </div>
            <div className="coluna-titulo">
                <p>Permissões</p>
                <i class="fa-solid fa-sort"></i>
            </div>
            <div className="coluna-titulo">
                <p>Berços Editáveis</p>
                <i class="fa-solid fa-sort"></i>
            </div>
            <div className="coluna-titulo">
                <p>Status</p>
                <i class="fa-solid fa-sort"></i>
            </div>
            <div className="coluna-titulo">
                <p>Ações</p>
            </div>
        </div>
    )
}

export default TabelaTopo;