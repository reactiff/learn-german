import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { camelToSentenceCase } from '@reactiff/ui-core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function optionFromNumber(value) {
  return {
    value: value,
    text: value,
  }
}

function optionFromString(value) {
  return {
    value: value,
    text: camelToSentenceCase(value),
  }
}

function parseArray(items) {
  return items.map(item => {
    if (typeof item === 'string') return optionFromString(item);
    if (typeof item === 'number') return optionFromNumber(item);
    return item;
  })
}

function parseOptions(props) {
  if (props.items) return parseArray(props.items);
}

export default function Selector(props) {

  const [id] = useState(uuid());
  const classes = useStyles();
  
  const handleChange = (event) => {
    props.onChange && props.onChange(event.target.value);
  };

  const options = parseOptions(props);

  const innerProps = {
    id,
    value: props.value,
    onChange: handleChange,
  };

  if (props.caption) {
    innerProps.labelId = id + '-label';
  }
  

  return (
    <FormControl className={classes.formControl}>

        {
          props.caption && <InputLabel id={id + '-label'}>{props.caption}</InputLabel>
        }
        
        <Select
          {...innerProps}
        >
          {
            options.map(o => {
              return <MenuItem value={o.value}>{o.text}</MenuItem>;
            })
          }
        </Select>
        {
          props.helperText && <FormHelperText>{props.helperText}</FormHelperText>
        }
      </FormControl>
  );
}
