import { useEffect, useState } from 'react';
import { useStore } from '../../store/storeProvider';
import { addDays, formatDate } from '../../helpers/helpers';
import Spinner from '../Common/Spinner/Spinner';
import FlippingCard from '../Common/Card/FlippingCard';

export default function NextGames() {
  const { error, games } = useStore();
  const [nextGames, setNextGames] = useState(false);

  useEffect(() => {
    setNextGames(games);
    console.log('games: ', nextGames);
  }, [games, error, nextGames]);

  return (
    !error && (
      <div className="cfl-section next-games">
        <h2 className="next-games_title">Next Games</h2>
        <FlippingCard />
      </div>
    )
  );
}
