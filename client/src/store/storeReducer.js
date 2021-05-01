const initialStore = {};

const types = {
  setError: 'set-error',
  setGames: 'set-games',
  setTeams: 'set-teams',
  setPlayers: 'set-players',
  setSeasons: 'set-seasons',
  setStandings: 'set-standings',
};

export default function storeReducer(state, action) {
  switch (action.type) {
    case types.setError:
      return { ...state, error: action.payload };
    case types.setGames:
      return { ...state, games: action.payload };
    case types.setTeams:
      return { ...state, teams: action.payload };
    case types.setPlayers:
      return { ...state, players: action.payload };
    case types.setSeasons:
      return { ...state, seasons: action.payload };
    case types.setStandings:
      return { ...state, standings: action.payload };
    default:
      return state;
  }
}

export { initialStore, types };
