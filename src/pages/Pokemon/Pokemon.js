import styles from "./Pokemon.module.css";

import { useFetch } from "../../hooks/useFetch";

import { useParams, Link } from "react-router-dom";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";

const Pokemon = () => {
  let { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const { data: pokemon } = useFetch(url);

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
