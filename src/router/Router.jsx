import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Game } from "../components/pages/Game";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Game />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
