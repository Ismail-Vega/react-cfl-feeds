import { useEffect, useState } from 'react';
import { useStore } from '../../store/storeProvider';
import { addDays, formatDate } from '../../helpers/helpers';

export default function NextGames() {
  const { error, games } = useStore();
  const [nextGames, setNextGames] = useState(false);

  useEffect(() => {
    setNextGames(games);
    console.log('games: ', nextGames);
  }, [games, error, nextGames]);

  return (
    <div className="cfl-section next-games">
      <h2 className="next-games_title">Next Games</h2>
    </div>
  );
}
