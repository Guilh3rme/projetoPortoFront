import './Inicio.scss'
import iconporto from '../../assets/icon-porto.png'
import iconancora from '../../assets/icon-ancora.png'
import iconrelogio from '../../assets/icon-relogio.png'

function Inicio() {
    return (
        <section id='inicio'>
            <div className='left'>
                <div className="resumo-mensal">
                    <h3>Resumo Mensal</h3>
                    <p className='sub-titulo'>Relatório de acompanhamento do mês de Novembro</p>
                    <div className='caixas'>
                        <div className='caixa'>
                            <img src={iconporto} alt="" />
                            <h3>56</h3>
                            <p>Total de navios atracados</p>
                            <p><span className='amarelo'>+10% em relação ao mês passado</span></p>
                        </div>
                        <div className='caixa'>
                            <img src={iconancora} alt="" />
                            <h3>71</h3>
                            <p>Total de navios fundeados</p>
                            <p><span className='ciano'>+8% em relação ao mês passado</span></p>
                        </div>
                        <div className='caixa'>
                            <img src={iconrelogio} alt="" />
                            <h3>83</h3>
                            <p>Total de navios esperados</p>
                            <p><span className='verde'>+2% em relação ao mês passado</span></p>
                        </div>
                    </div>
                </div>
                <div className="movimentacao-de-cargas">
                    <h3>Movimentação Total de Cargas</h3>
                    <div className='grafico'></div>
                    <div className='rodape'>
                        <div className='left'>
                            <div className='rodape'>
                                <p className='ponto verde'>•</p>
                                <p className='fonte-cinza'>Movimentação do último mês</p>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='rodape'>
                                <p className='ponto ciano'>•</p>
                                <p className='fonte-cinza'>Movimentação deste mês</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>

                <div className="produtos-exportados">
                    <h3>Ranking de Produtos Exportados</h3>
                    <div className='primeira linha fonte-cinza'>
                        <div className='numero'>#</div>
                        <div className='nome'>Nome</div>
                        <div className='relevancia'>Relevância</div>
                        <div className='porcentagem'>%</div>
                    </div>
                    <div className='linha'>
                        <div className='numero'>01</div>
                        <div className='nome'>Soja</div>
                        <div className='relevancia'>
                            <div className='barra'><div className='preenchimento-amarelo'></div></div>
                        </div>
                        <div className='porcentagem redor redor-amarelo'><span className='amarelo'>46%</span></div>
                    </div>
                    <div className='linha'>
                        <div className='numero'>02</div>
                        <div className='nome'>Ferro Gusa</div>
                        <div className='relevancia'>
                            <div className='barra'><div className='preenchimento-verde'></div></div>
                        </div>
                        <div className='porcentagem redor redor-verde'><span className='verde'>33%</span></div>
                    </div>
                    <div className='linha'>
                        <div className='numero'>03</div>
                        <div className='nome'>Cobre</div>
                        <div className='relevancia'>
                            <div className='barra'><div className='preenchimento-ciano'></div></div>
                        </div>
                        <div className='porcentagem redor redor-ciano'><span className='ciano'>12%</span></div>
                    </div>
                    <div className='ultima linha'>
                        <div className='numero'>04</div>
                        <div className='nome'>Milho</div>
                        <div className='relevancia'>
                            <div className='barra'><div className='preenchimento-rosa'></div></div>
                        </div>
                        <div className='porcentagem redor redor-rosa'><span className='rosa'>5%</span></div>
                    </div>
                </div>

                <div className="produtos-importados">
                    <h3>Ranking de Produtos Importados</h3>
                    <div className='primeira linha fonte-cinza'>
                        <div className='numero'>#</div>
                        <div className='nome'>Nome</div>
                        <div className='relevancia'>Relevância</div>
                        <div className='porcentagem'>%</div>
                    </div>
                    <div className='linha'>
                        <div className='numero'>01</div>
                        <div className='nome'>Fertilizantes</div>
                        <div className='relevancia'>
                            <div className='barra'><div className='preenchimento-amarelo'></div></div>
                        </div>
                        <div className='porcentagem redor redor-amarelo'><span className='amarelo'>46%</span></div>
                    </div>
                    <div className='linha'>
                        <div className='numero'>02</div>
                        <div className='nome'>Celulose</div>
                        <div className='relevancia'>
                            <div className='barra'><div className='preenchimento-verde'></div></div>
                        </div>
                        <div className='porcentagem redor redor-verde'><span className='verde'>33%</span></div>
                    </div>
                    <div className='linha'>
                        <div className='numero'>03</div>
                        <div className='nome'>Diesel</div>
                        <div className='relevancia'>
                            <div className='barra'><div className='preenchimento-ciano'></div></div>
                        </div>
                        <div className='porcentagem redor redor-ciano'><span className='ciano'>12%</span></div>
                    </div>
                    <div className='ultima linha'>
                        <div className='numero'>04</div>
                        <div className='nome'>Gasolina</div>
                        <div className='relevancia'>
                            <div className='barra'><div className='preenchimento-rosa'></div></div>
                        </div>
                        <div className='porcentagem redor redor-rosa'><span className='rosa'>5%</span></div>
                    </div>
                </div>
                <div className="tipos-de-operacao">
                    <h3>Tipos de Operação</h3>
                    <div className='linha'>
                        <div className='barra-e-titulo'>
                            <div className="titulo">IMPORTAÇÃO</div>
                            <div className="barra"><div className="preenchimento-amarelo"></div></div>
                        </div>
                        <div className='porcentagem redor redor-amarelo'><span className='amarelo'>48%</span></div>
                    </div>
                    <div className='linha'>
                        <div className='barra-e-titulo'>
                            <div className="titulo">EXPORTAÇÃO</div>
                            <div className="barra"><div className="preenchimento-ciano"></div></div>
                        </div>
                        <div className='porcentagem redor redor-ciano'><span className='ciano'>41%</span></div>
                    </div>
                    <div className='linha'>
                        <div className='barra-e-titulo'>
                            <div className="titulo">TRIPULANTES</div>
                            <div className="barra"><div className="preenchimento-verde"></div></div>
                        </div>
                        <div className='porcentagem redor redor-verde'><span className='verde'>11%</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio