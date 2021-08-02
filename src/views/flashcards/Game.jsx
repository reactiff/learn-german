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
    const [answer, setAnswer] = useState();

    const [startTime, setStartTime] = useState();
    const localRef = useRef({});


    const nextCombo = useCallback((_words) => {

        const local = localRef.current;

        if (Object.keys(local.processed).length === _words.length) {
            const stats = {
                score: local.results.length,
            };
            onEnd(stats);
        }
        // NEED TO END THE LOOP WHEN NO MORE WORDS AVAILABLE

        const next = getNextCombination(
            _words,
            local,
        );

        setWord(next.word);
        setChoices(next.choices);
        setAnswer(undefined);
        setStartTime(Date.now());

    }, [onEnd]);

    const handleTimeout = useCallback(() => {
        const local = localRef.current;
        local.results.push({
            word,
            choices,
            elapsed: options.time,
            correct: false,
            status: 'timed out',
        });
        nextCombo(words);
    }, [words, choices, nextCombo, word, options.time]);

    const handleChoice = (choice) => {
        if (!!answer) return;
        const local = localRef.current;
        if (local.timeout) clearTimeout(local.timeout);
        local.results.push({
            word,
            choice,
            choices,
            elapsed: (Date.now() - startTime) / 1000,
            correct: choice.german === word.german,
            status: 'selected',
        });
        setAnswer(word);
        setTimeout((_words) => nextCombo(words), 500, words);
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
        nextCombo(_words);

    }, [options, nextCombo]);

    return <>
        <VisualTimeout
            startTime={startTime}
            stopped={!!answer}
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
                        key={choice.german}
                        variant={answer && answer.german === choice.german ? 'contained' : 'outlined'}
                        color="primary"
                        className={classes.choice}
                        onClick={() => handleChoice(choice)}
                    >

                        {
                            // option
                            !answer && tokens[0]
                        }

                        {
                            // answer given, selected
                            answer && 
                            answer.german === choice.german &&
                            tokens[0]
                        }

                        {
                            // answer given, not selected
                            answer && 
                            answer.german !== choice.german &&
                            <>&nbsp;</>
                        }

                        
                    </Button>
                )
            })

        }
    </>

}