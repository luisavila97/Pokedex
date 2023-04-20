import styles from "./Pokemons.module.css";

import { Link } from "react-router-dom";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";

import { useQuery } from "react-query";

const Pokemons = ({ urlNumber }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${urlNumber}`;
  // const { data: pokemon, error } = useFetch(url);

  const {
    isLoading,
    isError,
    error,
    data: pokemon,
  } = useQuery(`Pokemon${urlNumber}`, () => fetch(url).then((res) => res.json()));

  return (
    <>
      {isLoading && <p>Loadin Pokemon...</p>}
      {isError && <p>Error: {error.message}</p>}
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
