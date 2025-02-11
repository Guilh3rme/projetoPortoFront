import React from 'react'
import DateTime from '../DateTime/DateTime';
import './BarraTopo.scss'

function BarraTopo(props) {
    return (
        <section id="barra-topo">
            <h3 className="titulo">{props.titulo}</h3>
            <div className="usuario">
                <i class="fa-solid fa-bell"></i>
                <i className="fa-solid fa-circle-user"></i>
            </div>
        </section>
    )
}

export default BarraTopo;