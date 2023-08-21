import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [pokemones, setPokemones] = useState("");
  const [searchPokemon, setSearchPokemon] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      // fetch(`https://pokeapi.co/api/v2/pokemon/3`)
      .then((response) => response.json())
      .then((data) => setPokemones(data));
  }, [searchPokemon]);

  console.log();

  return (
    <>
      {pokemones && (
        <div className="text-center p-20 bg-gray-900  text-2xl text-white">
          <h2 className="text-4xl capitalize">{pokemones.name}</h2>
          <img
            className="text-center mx-auto m-20 rounded-full bg-yellow-300 p-3 md:w-1/4 w-4/5"
            src={pokemones.sprites.front_default}
            alt={pokemones.name}
          />
          <button
            className="bg-orange-800 hover:bg-orange-600 p-3 rounded-md mx-2"
            onClick={() => setSearchPokemon(searchPokemon - 1)}
          >
            Anterior
          </button>
          <button
            className="bg-green-800 hover:bg-green-600 p-3 rounded-md mx-2"
            onClick={() => setSearchPokemon(searchPokemon + 1)}
          >
            Siguiente
          </button>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
