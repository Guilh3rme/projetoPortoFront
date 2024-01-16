import React, { useState } from "react";
import './Requisicoes.scss'
import BotaoAzul from "../BotaoAzul/BotaoAzul";
import Tabela from "../Tabela/Tabela";

function Requisicoes() {
    const columns = [
        {
            Header: 'Código',
            accessor: 'codigo',
        },
        {
            Header: 'Nome do Navio',
            accessor: 'nome',
        },
        {
            Header: 'Data de Requisição',
            accessor: 'data',
        },
        {
            Header: 'Operador Portuário',
            accessor: 'operador',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
    ];

    const [data, setData] = useState([
        { codigo: '12345', nome: 'Teste', data: '09 de Setembro de 2023', operador: 'Wilson&Amp', status: 'Em espera'},
        { codigo: '12345', nome: 'Toste', data: '09 de Setembro de 2023', operador: 'Wilson&Amp', status: 'Em espera'},
        { codigo: '12345', nome: 'Tiste', data: '09 de Setembro de 2023', operador: 'Wilson&Amp', status: 'Em espera'},
        
    ]);

    return (
        <section id='requisicoes'>
            <div className="topo">
                <h4 className="topo-titulo">Todos ({data.length})</h4>
            </div>
            <div className="tabela">
                <Tabela columns={columns} data={data} />
            </div>
        </section>
    )
}

export default Requisicoes;