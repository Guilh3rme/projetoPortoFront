import "./Ajuda.scss"
import SearchIcon from '@mui/icons-material/Search';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';


export function Ajuda() {
  return (
    <>

      <div className="cabecalhoAjuda">
        <h1> Como Podemos ajudar?</h1>
        <h2> Encontre tudo que você precisa saber para começar a usar o sistema Atraqui </h2>
        <button> <SearchIcon /> <strong> Pesquisar... </strong> </button>
      </div>


      <div className="BotoesAjuda">
        <div className="primeirosPassos">
          <EditNoteOutlinedIcon sx={{ fontSize: 50 }} />
          <h2> Primeiros passos</h2>
          <p> Configurações básicas e dicas iniciais </p>
        </div>

        <div className="atualizacoes">
          <SettingsOutlinedIcon sx={{ fontSize: 50 }} />
          <h2> Atualizações</h2>
          <p> Acompanhe as novidades e atualizações </p>
        </div>

        <div className="avalieAqui">
          <SentimentSatisfiedAltIcon sx={{ fontSize: 50 }} />
          <h2> Avalie aqui</h2>
          <p> A sua opinião é muito importante </p>
        </div>
      </div>
      <div className="area-atendimento">
        <h1> Área de atendimento</h1>
      </div>
      <div className="opcoes-contato">
        <div className="central-atendimento">
          <h3> Central de Atendimento: </h3>
          <p> <strong> (98) 3251-1234 </strong> </p>
        </div>

        <div className="email-contato">
          <h3> E-mail de contato:  </h3>
          <p> <strong> softwarehouse@gmail.com  </strong></p>
        </div>

      </div>


    </>


  )
}