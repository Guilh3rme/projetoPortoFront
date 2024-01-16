import "./NaviosAtracados.scss"
import TabelaNavios from '../NaviosAtracados/TabelaNavios/TabelaNavios'

function NaviosAtracados() {
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