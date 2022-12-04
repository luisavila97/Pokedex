import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemons from "./pages/Pokemons/Pokemons";
import SearchForm from "./components/SearchForm/SearchForm";
import Pokemon from "./pages/Pokemon/Pokemon";
import Footer from "./components/Footer/Footer";

function App() {
  let pokemonArray = [];
  for (let index = 1; index < 152; index++) {
    pokemonArray.push(index);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <SearchForm />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                {pokemonArray.map((url) => (
                  <Pokemons key={url} urlNumber={url} />
                ))}
              </div>
            }
          />

          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
