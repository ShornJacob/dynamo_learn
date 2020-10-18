import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

function createData(id,time,user) {
    return { id, time, user };
}

const rows = [
    createData('2009060155168', '06-09-20 01:55', 'sht@der.com'),
    createData('2009060155368', '06-09-20 01:55', 'sht@der.com'),
    createData('2009060145168', '06-09-20 01:55', 'sht@der.com'),
    createData('2006060155168', '06-09-20 01:55', 'sht@der.com'),
    createData('2009062155168', '06-09-20 01:55', 'sht@der.com'),
    createData('2009070155168', '06-09-20 01:55', 'sht@der.com')
];


function MUITableHead() {
    return (
        <TableHead>
            <TableRow>          
                     <StyledTableCell>ID</StyledTableCell>
                     <StyledTableCell>Initial Request Time</StyledTableCell>
                     <StyledTableCell>User</StyledTableCell>
            </TableRow>
        </TableHead>
    );
}





const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 450,
    }
}));

export default function MUITable() {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);


    const rowsPerPage = 5

    const handleClick = (event, name) => {
        console.log(name)
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>

                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                        aria-label="MUItable"
                    >
                        <MUITableHead/>

                        <TableBody>
            

                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {

                    
                            
                                  //  const labelId = `table-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            //role="checkbox"
                                            tabIndex={-1}
                                            key={row.id}
                                          
                                            >
                                        
{/* 
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.id}
                                            </TableCell> */}
                                            <TableCell align="left" >{row.id}</TableCell>
                                            <TableCell align="left">{row.time}</TableCell>
                                            <TableCell align="left">{row.user}</TableCell>
                                            {/* <TableCell align="right">{row.protein}</TableCell> */}
                                        </TableRow>
                                    );
                                })}

                            {/* add empty rows for same view */}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 52.5 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination

                    rowsPerPageOptions={[]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}

                />
            </Paper>
        </div>
    );
}