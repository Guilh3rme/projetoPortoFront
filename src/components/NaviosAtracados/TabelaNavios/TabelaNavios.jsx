import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BotaoBerco from '../BotaoBerco/BotaoBerco';
import { TableHead } from '@mui/material';
import BotaoCargaEdescarga from '../BotaoCargaEdeascarga/BotaoCargaEdescarga';
import imagenavio from "../../../assets/imagenavio.svg";
import { DotsThreeCircle } from '@phosphor-icons/react';


// Função para os controles de paginação
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// Função para criar dados
function createData(
  numberco,
  navio,
  imo,
  operacao,
  comprimento,
  dwt,
  carga,
  qtsCarga,
  calado,
  agencia,
  acao,
) {
  return { numberco, navio, imo, operacao, comprimento, dwt, carga, qtsCarga, calado, agencia, acao };
}

// Dados para a tabela
const rows = [
  createData(99, 'SEASTAR VULCA', '9681900', 'Carga', 180, 39.810, 'FERTILIZANTES', 38.019, 10.65, 'CARGONAVE', <DotsThreeCircle size={32} color="#3e3d3a" weight="fill" />),
  createData(100, 'ROSCO SANDALWOOD', '9288514', 'Descarga', 225, 76.801, 'SOJA', 66.885, 7.3, 'ALPHAMAR', <DotsThreeCircle size={32} color="#3e3d3a" weight="fill" />),
  createData(101, 'RADIANT REB', '9633197', 'Carga', 180, 38.233, 'FERTILIZANTES', 13.200, 10, 'AMART SERVICES', <DotsThreeCircle size={32} color="#3e3d3a" weight="fill" />),
].sort((a, b) => (a.numberco < b.numberco ? -1 : 1));

// Componente principal da tabela
export default function TabelaNavios() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Evita um salto de layout ao chegar à última página com linhas vazias.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // Funções para controlar a página e o número de linhas por página
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell align="center" >
                <BotaoBerco text={row.numberco} />
              </TableCell>
              <TableCell align="center"><img src={imagenavio} />{row.navio}</TableCell>
              <TableCell align="center">
                <div>
                  <h4>IMO</h4>
                  {row.imo}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <h4>OPERAÇÃO</h4>
                  <BotaoCargaEdescarga text={row.operacao} />
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <h4> COMP(M)</h4>
                  {row.comprimento}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <h4> DWT </h4>
                  {row.dwt}
                </div>

              </TableCell>
              <TableCell align="center">
                <div>
                  <h4> CARGA </h4>
                  {row.carga}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <h4> QTD. CARGA </h4>
                  {row.qtsCarga}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <h4>CALADO</h4>
                  {row.calado}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <h4>AGÊNCIA</h4>{row.agencia}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <h4>AÇÃO</h4>
                  {row.acao}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer >
  );
}
