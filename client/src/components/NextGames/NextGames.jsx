import { useEffect, useState } from 'react';
import { addDays } from '../../helpers/helpers';
import { useStore } from '../../store/storeProvider';
import FlippingCard from '../Common/Card/FlippingCard';

export default function NextGames() {
  const { error, games } = useStore();
  const [nextGames, setNextGames] = useState([]);
  console.log('nextGames: ', nextGames);

  function filterGames(data) {
    if (!data) return;
    const start = new Date().getTime();
    const end = addDays(new Date(), 22).getTime();

    return data.filter((item) => {
      const itemDate = new Date(item.date_start).getTime();

      return itemDate > start && itemDate < end;
    });
  }

  useEffect(() => {
    const gamesData = filterGames(games);

    if (gamesData) {
      setNextGames(gamesData.slice(0, 4));
    }
  }, [games]);

  return (
    !error &&
    nextGames && (
      <div className="cfl-section next-games">
        <h2 className="next-games_title">Next Games</h2>
        <div className="cfl-grid next-games__container">
          {nextGames.map((item) => (
            <FlippingCard item={item} key={item.game_id} />
          ))}
        </div>
      </div>
    )
  );
}
