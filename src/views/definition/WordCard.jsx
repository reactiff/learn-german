import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ui from '@reactiff/ui-core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    marginTop: 15,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WordCard(props) {

  const item = props.word;
  const englishWords = item.english.split(',').map(w => w.trim());
  let firstEnglishWord = englishWords[0];
    
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary" variant="caption">
          Level {item.type} 
        </Typography>

        
        <ui.row alignCenter spaced>
            <Typography variant="h6" color="primary">{item.german}</Typography>
            <Typography variant="h6" color="textPrimary">{firstEnglishWord}</Typography>
        </ui.row>

        <ui.col>

            <ui.row spaced marginBottom={1}>
                <ui.div bgColor="#80808080" padding="0px 2px"><small>EN</small></ui.div>
                <ui.div paddingTop={0}>
                    <Typography variant="caption" color="textSecondary">{item.english}</Typography>
                </ui.div>
                
            </ui.row>

            <ui.row spaced alignStart>
                <ui.div bgColor="#80808080" padding="0px 2px"><small>RU</small></ui.div>
                <ui.div paddingTop={0}>
                    <Typography variant="caption" >[{item.transcription}] </Typography>
                    <Typography variant="caption" color="textSecondary">{item.russian.toLowerCase()}</Typography>
                </ui.div>
            </ui.row>

            {
                item.associations && 
                <ui.row paddingLeft={14}>
                    <Typography variant="caption" color="textSecondary">~ {item.associations.toLowerCase()}</Typography>
                </ui.row>
            }
        </ui.col>


      </CardContent>

      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      
    </Card>
  );
}
