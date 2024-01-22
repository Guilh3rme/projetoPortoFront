import './BotaoCargaedescarga.scss';

function BotaoCargaEdescarga({ text }) {
  if (text === 'Carga') {
    return (
      <div className="estilo-botao-carga">
        <p><strong> Carga </strong></p>
      </div>
    )
  } else {
    return (
      <div className="estilo-botao-descarga">
        <p><strong>Descarga</strong></p>
      </div>
    )
  }
}
export default BotaoCargaEdescarga;