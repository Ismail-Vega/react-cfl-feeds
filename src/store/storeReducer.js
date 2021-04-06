const initialStore = {};

const types = {
  getPlayers: 'get-players',
};

export default function storeReducer(state, action) {
  switch (action.type) {
    case types.getPlayers:
      return { ...state, players: action.payload };
    default:
      return state;
  }
}

export { initialStore, types };
