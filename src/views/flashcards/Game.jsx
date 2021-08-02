import { useEffect, useState } from "react";
import { useRef } from "react";

import data from '../../data/verbs';

import { sortBy } from '@reactiff/ui-core';
import { useCallback } from "react";
import { Button, Typography } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import VisualTimeout from "../../components/VisualTimeout";
const useStyles = makeStyles((theme) => ({
    choice: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        marginBottom: theme.spacing(1),
        lineHeight: 3,
    },
}));


const NUMBER_OF_CHOICES = 4;

function getNextCombination(words, local) {
    let word;
    // random unseen word
    do {
        const index = Math.round(Math.random() * (words.length - 1));
        word = words[index];
    } while (Reflect.has(local.processed, word.german));

    local.processed[word.german] = true;

    const choices = { [word.german]: { sortKey: Math.random(), word } };

    // fill choices with unique random options
    do {
        const index = Math.round(Math.random() * (words.length - 1));
        const c = words[index];
        if (!Reflect.has(choices, c.german)) {
            choices[c.german] = { sortKey: Math.random(), word: c };
        }
    } while (Object.keys(choices).length < NUMBER_OF_CHOICES);

    const sorted = Object.values(choices);
    sorted.sort(sortBy(c => c.sortKey));

    return {
        word,
        choices: sorted.map(c => c.word),
    }
}
export default function Game({ options, onEnd }) {

    const classes = useStyles();

    const [words, setWords] = useState();
    const [word, setWord] = useState();
    const [choices, setChoices] = useState();
    const [startTime, setStartTime] = useState();
    const localRef = useRef({});

    const nextCombo = useCallback((_words, _local) => {
        const local = localRef.current;

        // NEED TO END THE LOOP WHEN NO MORE WORDS AVAILABLE

        const next = getNextCombination(
            _words || words,
            _local || local
        );
        setWord(next.word);
        setChoices(next.choices);
        setStartTime(Date.now());
    }, [words]);

    const handleTimeout = useCallback(() => {
        console.log('Timeout occurred');
        const local = localRef.current;
        local.results.push({
            word,
            choices,
            elapsed: options.time,
            correct: false,
            status: 'timed out',
        });
        nextCombo();
    }, [choices, nextCombo, word, options.time]);

    const handleChoice = (choice) => {
        const local = localRef.current;
        local.results.push({
            word,
            choice,
            choices,
            elapsed: (Date.now() - startTime) / 1000,
            correct: choice.german === word.german,
            status: 'selected',
        });
        nextCombo();
    };

    // effects
    useEffect(() => {
        const local = localRef.current;
        if (local.timeout) clearTimeout(local.timeout);
        local.timeout = null;
        local.processed = {};
        local.results = [];
        const _words = options.level === 0
            ? data
            : data.filter(w => w.type === options.level);
        setWords(_words);
        nextCombo(_words, local);
    }, [options, nextCombo]);

    return <>
        <VisualTimeout
            startTime={startTime}
            duration={options.time * 1000}
            onTimeout={handleTimeout}
        />
        {
            word &&
            <Typography gutterBottom variant="h3" component="h3">
                {word[options.fromLanguage]}
            </Typography>
        }

        {
            choices &&
            choices.map(choice => {

                const targetWord = choice[options.toLanguage];
                const tokens = targetWord.split(',');

                return (
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.choice}
                        onClick={() => handleChoice(choice)}
                    >
                        {tokens[0]}
                    </Button>
                )
            })

        }
    </>

}