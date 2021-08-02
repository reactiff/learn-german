import { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ui, { range } from '@reactiff/ui-core';
import Selector from '../../components/Selector';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 15,
    },
    formControlContainer: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

const levelOptions = [
    { value: 0, text: 'All levels' },
    { value: 1, text: 'Level 1' },
    { value: 2, text: 'Level 2' },
    { value: 3, text: 'Level 3' },
];

const timeOptions = range(5).map(n => (
    { value: n, text: `${n} seconds` }
)) 


export default function Setup({ onStart }) {

    const classes = useStyles();

    const [level, setLevel] = useState(1);
    const [time, setTime] = useState(3);
    const [fromLanguage, setFromLanguage] = useState('german');
    const [toLanguage, setToLanguage] = useState('english');

    const handleStart = () => {
        onStart({
            fromLanguage,
            toLanguage,
            level,
            time,
        });
    }

    return (
        <Card className={classes.root}>
            <CardContent>

                <Typography gutterBottom variant="h5" component="h2">
                    Flashcard Game
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                    Guess each word to test your knowledge.  Faster answers give higher scores.  
                </Typography>
                
                <br/>
                <Typography variant="body2" color="textSecondary" component="p">
                    TIP: Try giving yourself less time per answer for even higher scores.
                </Typography>

            </CardContent>

            <hr />
            <br />

            <ui.div className={classes.formControlContainer}>
                <ui.row spaced>
                    <Selector caption="From" value={fromLanguage} items={'german,english,russian'.split(',')} onChange={setFromLanguage} />
                    <Selector caption="To" value={toLanguage} items={'german,english,russian'.split(',')} onChange={setToLanguage} />
                </ui.row>
            </ui.div>

            <ui.div className={classes.formControlContainer}>
                <ui.row spaced>
                    <Selector caption="Level" value={level} items={levelOptions} onChange={setLevel} />
                    <Selector caption="Time" value={time} items={timeOptions} onChange={setTime} />
                </ui.row>
            </ui.div>

            <br />
            <hr />

            <CardActions>
                <Button color="primary" onClick={handleStart}>START</Button>
            </CardActions>

        </Card>
    );
}
