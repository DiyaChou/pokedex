import { createContext, useContext, useReducer } from "react";

const PokemonContext = createContext<string[]>([]);

const PokemonDispatchContext = createContext<any>(null);

const initialPokemon: string[] = [];

export default function PokemonProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [pokemonList, setPokemonList] = useReducer(
    pokemonListReducer,
    initialPokemon
  );

  return (
    <PokemonContext.Provider value={pokemonList}>
      <PokemonDispatchContext.Provider value={setPokemonList}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonContext.Provider>
  );
}

function pokemonListReducer(
  pokemonList: string[],
  action: { type: string; payload: string[] }
) {
  switch (action.type) {
    case "add": {
      return [...new Set([...pokemonList, ...action.payload])];
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function usePokemon() {
  return useContext(PokemonContext);
}

export function usePokemonDispatch() {
  return useContext(PokemonDispatchContext);
}
