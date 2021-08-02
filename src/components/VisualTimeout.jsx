import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        width: 'calc(100% + 48px)',
        margin: '-24px -24px 24px -24px',
        '& .MuiLinearProgress-bar1Determinate': {
            transitionDuration: '0s!important',
        }
    },
});

export default function VisualTimeout({ startTime, duration, onTimeout, stopped }) {

    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {

        let animationId;

        const tick = () => {

            const elapsed = Date.now() - startTime;

            setProgress(Math.min(100, elapsed / duration * 100))

            if (stopped) {
                return;
            }

            if (elapsed >= duration ) {
                onTimeout();
                return
            }

            

            animationId = window.requestAnimationFrame(tick);
        }




        tick();

        return () => {
            if (animationId) {
                window.cancelAnimationFrame(animationId);
            }
        }

    }, [startTime, duration, onTimeout, stopped]);

    return (
        <div className={classes.root}>
            <LinearProgress
                variant="determinate"
                color="primary"
                value={progress}
            />
        </div>
    );
}
