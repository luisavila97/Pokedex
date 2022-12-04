import styles from "./Pokemons.module.css";

import { useFetch } from "../../hooks/useFetch";

import { Link } from "react-router-dom";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";

const Pokemons = ({ urlNumber }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${urlNumber}`;
  const { data: pokemon, error } = useFetch(url);

  return (
    <>
      {error && <p>An error happened, refresh the page...</p>}
      {pokemon && (
        //   name, sprites, types
        <div className={styles.pokemon}>
          <PokemonDetails pokemon={pokemon} />
          <Link to={`/pokemon/${pokemon.name}`}>More details</Link>
        </div>
      )}
    </>
  );
};

export default Pokemons;
