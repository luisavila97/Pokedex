import styles from "./Pokemon.module.css";

import { useParams, Link } from "react-router-dom";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";

import { useQuery } from "react-query";

const Pokemon = () => {
  let { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const {
    isLoading,
    isError,
    error,
    data: pokemon,
  } = useQuery(`Pokemon${id}`, () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      {pokemon && (
        <div className={styles.pokemon}>
          <PokemonDetails pokemon={pokemon} details={true} />
          <Link to="/">Home Page</Link>
        </div>
      )}
    </>
  );
};

export default Pokemon;
