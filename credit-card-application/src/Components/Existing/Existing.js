import React, {useEffect} from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ExistingTable from './ExistingTable/ExistingTable';

const useStyles = makeStyles({
    tablecontainer: {
        width: '920px'
    }
});

function Existing(props) {
    const classes = useStyles();
    useEffect(() => {
        console.log('Getting updated card list.')
        props.updateCardList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <Grid container item className={classes.tablecontainer}>
            <Grid item xs={12}>
                <Typography variant="h5">Existing Cards</Typography>
            </Grid>
            <Grid item xs={12}>
                <ExistingTable 
                    cards={props.cards}
                />
            </Grid>
        </Grid>
    )
}

export default Existing