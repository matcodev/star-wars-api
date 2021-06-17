import { BrowserRouter, Switch, Route } from "react-router-dom";
import Personajes from "./components/Personajes";
import Naves from "./components/Naves";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Persons from "./components/Persons";


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
      </div>
      <Switch>
        <Route path="/personajes/:id">
            <Persons />
        </Route>
        <Route path="/personajes">
          <Personajes />
        </Route>
        <Route path="/naves">
          <Naves />
        </Route>
        <Route path="/" exact>
          <Inicio />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
