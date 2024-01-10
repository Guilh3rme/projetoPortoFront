import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarraLateralBotao from "./BarraLateralBotao";
import './BarraLateral.scss'
import logo from '../../assets/logo2.png'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnchorRoundedIcon from '@mui/icons-material/AnchorRounded';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import DirectionsBoatFilledRoundedIcon from '@mui/icons-material/DirectionsBoatFilledRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

function BarraLateral(props) {
    /* ABRIR E FECHAR A BARRA LATERAL */
    const [isStowed, setIsStowed] = useState(false)
    function stowBar() {
        setIsStowed(prevIsStowed => {
            return !prevIsStowed
        })
    }

    /* VERIFICAR QUAL BOTÃO ESTÁ ATIVO */
    const [isSelected, setIsSelected] = useState(1)
    function selected(value) {
        setIsSelected(value)
    }

    return (
        <div id="side-bar" className={isStowed ? 'stowed' : ''}>
            <div className="side-bar__buttons">
                <button onClick={stowBar} className="side-bar__toggle" type="button" title="bar-toggle"><i className="fa-solid fa-chevron-left"></i></button>
                <div className="img-container">
                    <img src={logo} alt="" />
                </div>
            </div>
            <h2 className="title">MENU</h2>
            <div className="side-bar__body">
                <div>
                    <div className="side-bar__menu">
                        <span onClick={() => {props.setWhichApp('Início'); selected(1);}}>
                            <BarraLateralBotao text="Início" icon={<HomeRoundedIcon/>} uiOpen={props.uiOpen} number={1} isSelected={isSelected}/>
                        </span>
                        {<span onClick={() => {props.setWhichApp('Navios Atracados'); selected(2);}}>
                            <BarraLateralBotao text="Navios Atracados" icon={<AnchorRoundedIcon />} uiOpen={props.uiOpen} number={2} isSelected={isSelected}/>
                        </span>}
                        <span onClick={() => {props.setWhichApp('Fila de Atracação'); selected(3);}}>
                            <BarraLateralBotao text="Fila de Atracação" icon={<AccessAlarmRoundedIcon />} uiOpen={props.uiOpen} number={3} isSelected={isSelected}/>
                        </span>
                        <span onClick={() => {props.setWhichApp('Usuários'); selected(4);}}>
                            <BarraLateralBotao text="Usuários" icon={<PeopleRoundedIcon />} uiOpen={props.uiOpen} number={4} isSelected={isSelected}/>
                        </span>
                        <span onClick={() => {props.setWhichApp('Requisições de Atracação'); selected(5);}}>
                            <BarraLateralBotao text="Requisições de Atracação" icon={<PostAddRoundedIcon />} uiOpen={props.uiOpen} number={5} isSelected={isSelected}/>
                        </span>
                        <span onClick={() => {props.setWhichApp('Registro de Navios'); selected(6);}}>
                            <BarraLateralBotao text="Registro de Navios" icon={<DirectionsBoatFilledRoundedIcon />} uiOpen={props.uiOpen} number={6} isSelected={isSelected}/>
                        </span>
                        <span onClick={() => {props.setWhichApp('Ajuda'); selected(7);}}>
                            <BarraLateralBotao text="Ajuda" icon={<HelpOutlineRoundedIcon />} uiOpen={props.uiOpen} number={7} isSelected={isSelected}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarraLateral;