
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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

const rows = [
  createData('BERÇO 99', 'SEASTAR VULCA', '9681900', 'carga', 180, 39.810, 'FERTILIZANTES', 38.019, 10.65, 'CARGONAVE'),
  createData('BERÇO 100', 'ROSCO SANDALWOOD', '9288514', 'descarga', 225, 76.801, 'SOJA', 66.885, 7.3, 'ALPHAMAR'),
  createData('BERÇO 101', 'RADIANT REB', '9633197', 'carga', 180, 38.233, 'FERTILIZANTES', 13.200, 10, 'AMART SERVICES'),

];

export default function TabelaNavios() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell align="right"></TableCell> */}
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.numberco}</TableCell>
              <TableCell align="center">{row.navio}</TableCell>
              <TableCell align="center">
                <div>
                  <p>IMO</p>
                  {row.imo}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <p>Operação</p>
                  {row.operacao}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <p> COMP(M)</p>
                  {row.comprimento}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <p> DWT </p>
                  {row.dwt}
                </div>

              </TableCell>
              <TableCell align="center">
                <div>
                  <p> CARGA </p>
                  {row.carga}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <p> QTD. CARGA </p>
                  {row.qtsCarga}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <p>CALADO</p>
                  {row.calado}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <p>AGÊNCIA</p>{row.agencia}
                </div>
              </TableCell>
              <TableCell align="center">
                <div>
                  <p>AÇÃO</p>
                  {row.acao}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
