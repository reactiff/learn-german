import Button from '@material-ui/core/Button';
import data from '../../data/verbs';

// router
import {
  useHistory,
  useParams,
} from "react-router-dom";

import WordCard from './WordCard';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import ui from '@reactiff/ui-core';
import { useMemo } from 'react';

export default function Definition() {

  const history = useHistory();

  const params = useParams();
  const word = params.word;
  const level = +params.level;

  const filtered = useMemo(() => {
      if (level === 0) return data;
      return data.filter(item => item.type === +level)
  }, [level]);

  const index = filtered.findIndex(entry => entry.german === word);
  const nextIndex = (index + 1) % filtered.length;
  const prevIndex = index === 0 ? filtered.length - 1 : index - 1;
  

  return <>
  
    <IconButton onClick={() => history.push(`/verbs`) } >
      <ArrowBack />&nbsp;verbs
    </IconButton>

    <WordCard word={filtered[index]} />

    <br />



    <ui.row>

      <Button variant="text" onClick={() => history.push(`/${filtered[prevIndex].german}/${level}`) }>
        <ui.row spaced alignCenter css={{textTransform: 'none'}}>
          <div>&larr;</div><div>{filtered[prevIndex].german}</div>
        </ui.row>
      </Button>

      <ui.div grow></ui.div>
      
      <Button variant="text" onClick={() => history.push(`/${filtered[nextIndex].german}/${level}`) }>
        <ui.row spaced alignCenter css={{textTransform: 'none'}}>
          <div>{filtered[nextIndex].german}</div><div>&rarr;</div>
        </ui.row>
      </Button>

    </ui.row>

  </>
}