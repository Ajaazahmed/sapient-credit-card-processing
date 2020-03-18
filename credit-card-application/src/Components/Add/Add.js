import React, { useState } from 'react'
import { Typography, Grid, TextField, Button, makeStyles } from '@material-ui/core';
import { validateName, validateCardNumber, validateLimit } from '../../Validations/AddCreditCard';
import { addCard } from '../../Api/CreditCardApi';
import { toast } from 'react-toastify';

const useStyles = makeStyles({
    tablecontainer: {
        padding: '20px'
    }
});

function Add(props) {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [limit, setLimit] = useState('')

    return (
        <Grid className = {classes.tablecontainer} container item direction="column" spacing={3} >
            <Grid item xs={12}>
                <Typography variant="h5">Add</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    value={name}
                    label="Name"
                    onChange={(e) => {
                        const name = e.target.value
                        if (validateName(name)) {
                            setName(name)
                        }
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    value={cardNumber}
                    label="Card Number"
                    onChange={(e) => {
                        const cardNumber = e.target.value
                        if (validateCardNumber(cardNumber)) {
                            setCardNumber(cardNumber)
                        }
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    value={limit}
                    label="Limit"
                    onChange={(e) => {
                        const limit = e.target.value
                        if (validateLimit(limit)) {
                            setLimit(limit)
                        }
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    onClick={() => {
                        addCard({ name, cardNumber, limit })
                            .then(() => {
                                toast.success('Card added successfully!')
                                props.updateCardList()
                            })
                            .catch((e) => {
                                if(e.response) {
                                    toast.error(e.response.data)
                                } else {
                                    toast.error(e.message)
                                }                               
                            })
                    }}
                >
                    Add
                </Button>
            </Grid>
        </Grid>
    )
}


export default Add