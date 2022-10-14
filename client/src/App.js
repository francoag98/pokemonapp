import { Route } from "react-router-dom";
import "./App.css";
import { FirstPage } from "./Components/FirstPage";
import { Home } from "./Components/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "./redux/actions/actions";
import { Form } from "./Components/FormCreate";
import { PokemonDetail } from "./Components/PokemonDetail";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  });
  return (
    <div className="App">
      <Route exact path="/" render={() => <FirstPage />} />
      <Route path="/Home" render={() => <Home />} />
      <Route path="/Pokemon/:id" component={PokemonDetail} />
      <Route path="/CreatePokemon" render={() => <Form />} />
    </div>
  );
}

export default App;
