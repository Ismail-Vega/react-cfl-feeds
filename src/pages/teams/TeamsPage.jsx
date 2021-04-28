import { useEffect } from 'react';
import usePlayersSearch from '../../helpers/apiHooks/usePlayersSearch';

export default function TeamsPage() {
  const players = usePlayersSearch();

  useEffect(() => {
    //dispatch({ type: types.setPlayers, payload: players });
  }, []);
  return <div>Hello Teams</div>;
}
