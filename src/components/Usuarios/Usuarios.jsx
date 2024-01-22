import React, { useState } from "react";
import './Usuarios.scss'
import BotaoAzul from "../BotaoAzul/BotaoAzul";
import Tabela from "../Tabela/Tabela";
import Modal from "../Tabela/InputModal/InputModal"

function Usuarios() {
    const columns = [
        {
            Header: 'Imagem',
            accessor: 'imagem',
        },
        {
            Header: 'Nome',
            accessor: 'nome',
        },
        {
            Header: 'Data de Adição',
            accessor: 'data',
        },
        {
            Header: 'Permissões',
            accessor: 'permissoes',
        },
        {
            Header: 'Berços Editáveis',
            accessor: 'bercos',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
    ];

    const [data, setData] = useState([
        { imagem: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif', nome: 'Guilherme Ferreira dos Reis', data: '09 de Setembro de 2023', permissoes: 'View, Add, Edit', bercos: 'Todos', status: 'Ativo'},
        { imagem: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif', nome: 'Pedro Elizaldo de Sá Batista', data: '10 de Setembro de 2023', permissoes: 'Add, Edit', bercos: '99, 100, 101', status: 'Ativo'},
        { imagem: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif', nome: 'Amanda Carvalho de Souza', data: '11 de Setembro de 2023', permissoes: 'Add, Edit', bercos: '102, 103, 104, 105', status: 'Ativo'},
        { imagem: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif', nome: 'Rafael Arouche Ferreira', data: '12 de Setembro de 2023', permissoes: 'View', bercos: 'Nenhum', status: 'Inativo'},
        { imagem: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif', nome: 'Felipe Gabriel Guimarães', data: '12 de Setembro de 2023', permissoes: 'View', bercos: 'Nenhum', status: 'Ativo'},
        { imagem: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif', nome: 'João Lucas Araújo Barroso', data: '12 de Setembro de 2023', permissoes: 'View', bercos: 'Nenhum', status: 'Inativo'},
        { imagem: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif', nome: 'Matheus Rhazek', data: '12 de Setembro de 2023', permissoes: 'View', bercos: 'Nenhum', status: 'Ativo'},
        
    ]);

    // const addNewItem = () => {
    //     const newItem = {
    //         imagem: 'url',
    //         nome: 'João da Silva',
    //         data: 'alguma data',
    //         permissoes: 'alguma permissão',
    //         bercos: 'algum berço',
    //         status: 'Inativo',
    //     };

    //     setData(prevData => [...prevData, newItem]); // Atualiza o state separando os dados e adicionando a nova linha.
    // };

    const [modalOpen, setModalOpen] = useState(false);

    const addNewItem = (newItem) => {
        setData(prevData => [...prevData, newItem]);
    };

    const handleAddItemClick = () => {
        setModalOpen(true);
        console.log('handleAddItemClick')
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        console.log('handleCloseModal')
    };

    return (
        <section id='usuarios'>
            <div className="topo">
                <h4 className="topo-titulo">Todos ({data.length})</h4>
                <span onClick={handleAddItemClick}>
                    <BotaoAzul texto='Adicionar Usuário' icone = '+'/>
                </span>
            </div>
            <div className="tabela">
                <Tabela columns={columns} data={data} />
            </div>
            <Modal open={modalOpen} onClose={handleCloseModal} onAddItem={addNewItem} />
        </section>
    )
}

export default Usuarios;