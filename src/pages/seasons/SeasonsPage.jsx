import { useEffect } from 'react';
import usePlayersSearch from '../../helpers/apiHooks/usePlayersSearch';

export default function SeasonsPage() {
  const players = usePlayersSearch();

  useEffect(() => {
    // dispatch({ type: types.setPlayers, payload: players });
  }, []);
  return <div>Hello Seasons</div>;
}
