/**
 * Given an ID for a node or token, attempts to find the human-readable label.
 * @param {string} id The ID of the node or token.
 * @param {any} stateManagerData The data from the state manager, usually
 * gotten from `StateManager.getJSON()`.
 * @returns {string | null} The human-readable label if the ID exists in the
 * automaton, and `null` otherwise.
 */
export function convertIDtoLabelOrSymbol(
  id: string,
  stateManagerData: any,
): string | null {
  // Check if the ID matches a state ID
  const state = stateManagerData.states.find((s: any) => s.id === id);
  if (state) {
    return state.label;
  }

  // Check if the ID matches a symbol ID in the alphabet
  const symbol = stateManagerData.alphabet.find((a: any) => a.id === id);
  if (symbol) {
    return symbol.symbol;
  }

  // ID not found in states or alphabet
  return null;
}
