import { createContext, useContext, useReducer } from "react";

const AllPokemonContext = createContext<string[]>([]);

const AllPokemonDispatchContext = createContext<any>(null);

const initialAllPokemon: string[] = [];

export default function AllPokemonProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [allPokemon, setAllPokemon] = useReducer(
    allPokemonReducer,
    initialAllPokemon
  );

  return (
    <AllPokemonContext.Provider value={allPokemon}>
      <AllPokemonDispatchContext.Provider value={setAllPokemon}>
        {children}
      </AllPokemonDispatchContext.Provider>
    </AllPokemonContext.Provider>
  );
}

function allPokemonReducer(
  allPokemon: string[],
  action: { type: string; payload: string[] }
) {
  switch (action.type) {
    case "add": {
      allPokemon;
      return [...action.payload];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useAllPokemon() {
  return useContext(AllPokemonContext);
}

export function useAllPokemonDispatch() {
  return useContext(AllPokemonDispatchContext);
}
