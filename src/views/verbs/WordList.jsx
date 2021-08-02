import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import WordListItem from './WordListItem';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,

    '& .list-item': {
      borderBottom: 'thin solid #80808033',
    },
    '& .list-item:last-child': {
      border: 'none',
    },

    '& .MuiButton-text': {
      padding: 0,
      minWidth: 32,
    }
  },

  
}));

export default function ItemsList({ rows, level, keyForItem }) {
  
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {
        rows.map((item) => {
          const itemKey = keyForItem(item);
          return <WordListItem key={itemKey} item={item} level={level} />
        })
      }
    </List>
  );
}
