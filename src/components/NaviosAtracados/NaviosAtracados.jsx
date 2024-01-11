import "./NaviosAtracados.scss"
import TabelaNavios from '../NaviosAtracados/TabelaNavios/TabelaNavios'

function NaviosAtracados() {
  // const dadosTabela = [
  //   { numBerço: 'BERÇO 99', navio: 'SEASTAR VULCA', imo: "9681900" },
  //   { numBerço: 'BERÇO 100', navio: 'ROSCO SANDALWOOD', imo: "9288514" },
  //   { numBerço: 'BERÇO 101', navio: 'RADIANT REB', imo: "9633197" }

  // ]
  return (
    <section id="NaviosAtracados">
      <div className="topo-titulo"> <h4> BERÇOS </h4> </div>
      <div className="tabela-navios">
        <TabelaNavios />
      </div>
    </section>

  )
}
export default NaviosAtracados;