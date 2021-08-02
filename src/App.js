import { useMemo } from "react";

// mui
import { ThemeProvider } from "@material-ui/styles";

// router
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

// app components
import theme from './init/theme';
import makeMenu from './init/menu';
import Layout from "./components/Layout";

// views
import Home from "./views/home";
import Verbs from "./views/verbs";
import Definition from "./views/definition";
import Flashcards from "./views/flashcards";
import Sentences from "./views/sentences";

function App() {

  const history = useHistory();
  const menu = useMemo(() => makeMenu(history), [history]);

  return (
    <ThemeProvider theme={theme}>
      <Layout menuItems={menu}>
        
          <Switch>
            <Route path="/verbs">
              <Verbs />
            </Route>
            <Route path="/flashcards">
              <Flashcards />
            </Route>
            <Route path="/sentences">
              <Sentences />
            </Route>
            <Route path="/:word/:level?">
              <Definition />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        
      </Layout>
    </ThemeProvider>
  );
}

export default App;
