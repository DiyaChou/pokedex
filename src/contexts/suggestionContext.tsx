import { createContext, useContext, useReducer } from "react";

const SuggestionsContext = createContext<string[]>([]);

const SuggestionsDispatchContext = createContext<any>(null);

const initial: string[] = [];

export default function SuggestionsProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [suggestions, setSuggestions] = useReducer(suggestionsReducer, initial);

  return (
    <SuggestionsContext.Provider value={suggestions}>
      <SuggestionsDispatchContext.Provider value={setSuggestions}>
        {children}
      </SuggestionsDispatchContext.Provider>
    </SuggestionsContext.Provider>
  );
}

function suggestionsReducer(
  initial: string[],
  action: { type: string; payload: string[] }
) {
  switch (action.type) {
    case "set": {
      initial;
      return [...action.payload];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useSuggestions() {
  return useContext(SuggestionsContext);
}

export function useSuggestionsDispatch() {
  return useContext(SuggestionsDispatchContext);
}
