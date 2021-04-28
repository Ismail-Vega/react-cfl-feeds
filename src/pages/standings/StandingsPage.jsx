import React, { useEffect } from 'react';
import usePlayersSearch from '../../helpers/apiHooks/usePlayersSearch';

export default function StandingsPage() {
  const players = usePlayersSearch();

  useEffect(() => {
    //dispatch({ type: types.setPlayers, payload: players });
  }, []);
  return <div>Hello Standings</div>;
}
