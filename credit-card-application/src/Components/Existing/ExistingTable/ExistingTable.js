import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { formatCardNumber } from '../../../Utilities/formatting';

const useStyles = makeStyles({
    table: {
        width: '900px'
    },
    green: {
        color: 'green'
    },
    red: {
        color: 'red'
    },
    header: {
        backgroundColor: 'lightgrey'
    }
});

function createData(card) {
    return { 
        name: card.cardName, 
        cardNumber: card.cardNumber, 
        balance: card.cardBalance, 
        limit: card.cardLimit 
    };
}


export default function ExistingTable(props) {
    const classes = useStyles();
    let cards = props.cards.map(card => createData(card))

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className = {classes.header}>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Card Number</TableCell>
                        <TableCell align="center">Balance</TableCell>
                        <TableCell align="center">Limit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cards.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row" align="center">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{formatCardNumber(row.cardNumber)}</TableCell>
                            <TableCell align="center" className={row.balance >= 0 ? classes.green : classes.red}>£{row.balance}</TableCell>
                            <TableCell align="center">£{row.limit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}