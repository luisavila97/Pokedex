const PokemonDetails = ({ pokemon, details }) => {
  return (
    <div>
      <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      {details && (
        <div>
          <h2>Type: {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</h2>
          <h2>Height: {pokemon.height / 10} M</h2>
          <h2>Weight: {pokemon.weight / 10} KG</h2>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
