import BarraLateral from "../../components/BarraLateral/BarraLateral";
import { useState } from 'react'
import BarraTopo from "../../components/BarraTopo/BarraTopo";
import './Atraqui.scss'
import Inicio from "../../components/Inicio/Inicio";

function Atraqui() {
    const [whichApp, setWhichApp] = useState('Início')

    return (
        <>
            <BarraLateral setWhichApp={setWhichApp}/>
            <div id="atraqui__container">
                <BarraTopo titulo={whichApp}/>
                {whichApp === 'Início' && <Inicio />}
                {whichApp === 'Navios Atracados' && <h1>NAVIOS ATRACADOS</h1>}
                {whichApp === 'Fila de Atracação' && <h1>FILA DE ATRACAÇÃO</h1>}
                {whichApp === 'Usuários' && <h1>USUÁRIOS</h1>}
                {whichApp === 'Requisições de Atracação' && <h1>REQUISIÇÕES DE ATRACAÇÃO</h1>}
                {whichApp === 'Registro de Navios' && <h1>REGISTRO DE NAVIOS</h1>}
                {whichApp === 'Ajuda' && <h1>AJUDA</h1>}
            </div>
        </>
    )
}

export default Atraqui;