import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetups">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>  
        </Switch>
      </Layout>
  );
}

export default App;
