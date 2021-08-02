import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// router
import {
  useHistory,
} from "react-router-dom";

import ui from '@reactiff/ui-core';


export default function WordListItem(props) {

    const { item, level } = props;

    const englishWords = item.english.split(',').map(w => w.trim());
    let firstEnglishWord = englishWords[0];
    
    const history = useHistory();

    const handleWordClick = (key) => history.push(`/${key}/${level}`);

    return <ListItem className="list-item" alignItems="flex-start">

        <ListItemText
            primary={<>
                    <ui.row alignCenter spaced>
                        <Typography variant="h6" color="primary">{item.german}</Typography>
                        <Typography variant="h6" color="textPrimary">{firstEnglishWord}</Typography>
                        <ui.div grow />
                        <Button color="secondary" onClick={() => handleWordClick(item.german)}>&rarr;</Button>
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
                </>
            }
            
        />
    </ListItem>
}