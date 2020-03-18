import React, { useState } from 'react';
import Add from './Add/Add';
import Title from './Title/Title';
import Existing from './Existing/Existing';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCards } from '../Api/CreditCardApi';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
    marginLeft: theme.spacing(10),
    width: '920px'
  }
}));

toast.configure({
  draggable: false,
  autoClose: false
});

function App() {
  const classes = useStyles()
  const [cards, setCards] = useState([])

  const updateCardList = () => {
    getAllCards()
      .then((response) => {
        const data = response.data
        setCards(data)
      })
      .catch(() => {
        toast.error('An error occurred while fetching card list.')
      })
  }

  return (
    <Grid container spacing={2} direction="column" className={classes.root}>
      <Title />
      <Add
        updateCardList={updateCardList}
      />
      <Existing
        cards={cards}
        updateCardList={updateCardList}
      />
    </Grid>
  );
}

export default App;
