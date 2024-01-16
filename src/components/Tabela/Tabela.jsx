import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    IconButton,
} from '@mui/material';
import { Search, NavigateBeforeRounded, NavigateNextRounded } from '@mui/icons-material';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import './Tabela.scss'

const Tabela = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        gotoPage,
        pageOptions,
        setPageSize,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 8 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter, pageIndex } = state;

    const memoizedColumns = useMemo(() => columns, [columns]);

    const [cor, setCor] = useState('')
    const corFlag = (status) => {
        switch (status) {
            case "Ativo":   return "#35AADC";
            case "Inativo": return "#DC3545";
            case "Em espera":  return "#CBC424";
            default:      return "#FFFFFF";
        }
    }

    return (
        <div>
            <div style={{ marginBottom: '16px', borderRadius: '100px'}}>
                <TextField
                    variant="filled"
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        marginLeft: '40%',
                        transform: 'scale(0.75)',
                        '& .MuiInputBase-formControl': {
                            borderRadius: '100px',
                            height: '50px',
                            width: '300px',
                            borderBottom: 'none'
                        },
                        '& .MuiInputBase-formControl::before': {
                            borderBottom: 'none' 
                        },
                        '& .MuiInputBase-formControl::after': {
                            borderBottom: 'none' 
                        },
                        '& .MuiInputBase-formControl:hover::before': {
                            borderBottom: 'none' 
                        },
                        '& .MuiInputBase-formControl:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: 'none' 
                        },
                        '& .MuiFormLabel-root': {
                            left: '10px',
                            top: '-2px'
                        },
                        '& .MuiFilledInput-input': {
                            paddingLeft: '22px',
                            paddingBottom: '16px'
                        },
                        '& .input-text-label': {
                            display: 'flex',
                            alignItems: 'center',
                        },
                    }}
                    label={<div className='input-text-label'><SearchIcon sx={{marginRight:'.25rem', fontSize: '1.23rem'}} />Pesquisar</div>}
                    value={globalFilter || ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                />
                
            </div>
            <TableContainer component={Paper} >
                <Table {...getTableProps()} style={{ minWidth: 650 }}>
                    <TableHead>
                        {headerGroups.map((headerGroup) => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <TableCell
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                    >
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <ArrowDropDownRoundedIcon sx={{ marginBottom: '-7px' }} />
                                                ) : (
                                                    <ArrowDropUpRoundedIcon sx={{ marginBottom: '-7px' }} />
                                                )
                                            ) : (
                                                <SortIcon sx={{ fontSize: '15px', marginBottom: '-3px', marginLeft: '5px' }} />
                                            )}
                                        </span>
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <TableRow {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <TableCell {...cell.getCellProps()} align="left" >
                                            {cell.column.Header === 'Imagem' && <span className='celula celula-imagem'>
                                                <img src={row.values.imagem} alt="" />
                                            </span>}

                                            {/* {cell.column.Header === 'Status' && <span className='celula celula-grifada' style={row.values.status === 'Ativo' ? {backgroundColor: '#35AADC'} : {backgroundColor: '#DC3545'}}>
                                                {cell.render('Cell')}
                                            </span>} */}

                                            {cell.column.Header === 'Status' && <span className='celula celula-grifada' style={{backgroundColor: corFlag(row.values.status)}}>
                                                {cell.render('Cell')}
                                            </span>}

                                            {cell.column.Header === 'Nome' && <span className='celula'>
                                                {cell.render('Cell')}
                                            </span>}

                                            {cell.column.Header === 'Data de Adição' && <span className='celula'>
                                                {cell.render('Cell')}
                                            </span>}

                                            {cell.column.Header === 'Permissões' && <span className='celula'>
                                                {cell.render('Cell')}
                                            </span>}

                                            {cell.column.Header === 'Berços Editáveis' && <span className='celula'>
                                                {cell.render('Cell')}
                                            </span>}
                                            
                                            {cell.column.Header === 'Código' && <span className='celula'>
                                                {cell.render('Cell')}
                                            </span>}

                                            {cell.column.Header === 'Nome do Navio' && <span className='celula'>
                                                {cell.render('Cell')}
                                            </span>}

                                            {cell.column.Header === 'Data de Requisição' && <span className='celula'>
                                                {cell.render('Cell')}
                                            </span>}

                                            {cell.column.Header === 'Operador Portuário' && <span className='celula'>
                                                {cell.render('Cell')}
                                            </span>}

                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ display:'flex', alignItems:'center', margin: '16px', position:'fixed', bottom: 0, right: 0 }}>
                <IconButton onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <NavigateBeforeRounded sx={{fontSize: '2rem'}}/>
                </IconButton>
                <span>
                    Página{' '}
                    <strong>
                        {pageIndex + 1} de {Math.ceil(rows.length / 10)}
                    </strong>{' '}
                </span>
                <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
                    <NavigateNextRounded sx={{fontSize: '2rem'}}/>
                </IconButton>
            </div>
        </div>
    );
};

export default Tabela;