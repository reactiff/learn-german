import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ui, { camelToSentenceCase } from '@reactiff/ui-core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 15,
    },
    rowContainer: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));



export default function GameScore({ stats, onPlayAgain }) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Game Score
                </Typography>
            </CardContent>

            <hr />
            <br />

            {
                Object.entries(stats).map(entry => {

                    return (
                        <ui.div className={classes.rowContainer}>
                            <ui.row spaced>
                                <div>{camelToSentenceCase(entry.key)}</div>
                                <div>{entry.value}</div>
                            </ui.row>
                        </ui.div>
                    )
                })
            }

            <br />
            <hr />

            <CardActions>
                <Button color="primary" onClick={onPlayAgain}>PLAY AGAIN</Button>
            </CardActions>

        </Card>
    );
}
