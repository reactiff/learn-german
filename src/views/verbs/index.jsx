import { useCallback } from 'react';

import { Button, ButtonGroup, Checkbox, Typography } from '@material-ui/core';
import { useState } from 'react';
import data from '../../data/verbs';
import WordList from './WordList';

import ui, { inline } from '@reactiff/ui-core';
import { useMemo } from 'react';


export default function Verbs() {
    
    const [filter, setFilter] = useState({
        level: 1,
    })

    const allLevels = filter.level === 0;
    const level1 = filter.level === 1;
    const level2 = filter.level === 2;
    const level3 = filter.level === 3;

    const handleLevelSelect = useCallback(
        (level) => {
            setFilter(f => Object.assign({}, f, { level }));
        }
    );

    const items = useMemo(() => {
        if (filter.level === 0) return data;
        return data.filter(item => item.type === filter.level)
    }, [filter.level]);
    
    return <>

        <ui.row padding={0} border="none solid #80808080" spaced alignCenter>
            <ui.div grow />
            <ui.div>
                <Typography variant="caption" color="textSecondary">LEVEL</Typography>
            </ui.div>            
            <ButtonGroup
                aria-label="Level button group"
                size="small"
            >
                <Button variant={ allLevels ? 'contained' : 'outlined'} color={ allLevels ? 'primary' : 'default'} onClick={() => handleLevelSelect(0)}>All</Button>
                <Button variant={ level1 ? 'contained' : 'outlined'} color={ level1 ? 'primary' : 'default'} onClick={() => handleLevelSelect(1)}>1</Button>
                <Button variant={ level2 ? 'contained' : 'outlined'} color={ level2 ? 'primary' : 'default'} onClick={() => handleLevelSelect(2)}>2</Button>
                <Button variant={ level3 ? 'contained' : 'outlined'} color={ level3 ? 'primary' : 'default'} onClick={() => handleLevelSelect(3)}>3</Button>
            </ButtonGroup>
        </ui.row>    

        <br />

        {
            filter.level === 0 &&
            <ui.row justifyStart>
                <Typography variant="caption" color="primary">All words</Typography>
            </ui.row>
        }

        {
            filter.level > 0 &&
            <ui.row justifyStart>
                <Typography variant="caption" color="primary">Level {filter.level} words</Typography>
            </ui.row>
        }
        

        <WordList 
            rows={items}
            level={filter.level}
            keyForItem={item => item.german}
        />
    </>
}