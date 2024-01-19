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
    </>


  )
}