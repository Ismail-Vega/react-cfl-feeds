import { useEffect } from 'react';
import { types } from '../../store/storeReducer';
import NextGames from '../../components/Homepage/NextGames';
import { useDispatch, useStore } from '../../store/storeProvider';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Hello home');
  }, []);

  return (
    <div className="cfl-wrapper">
      <div className="cfl-section">
        <h1>Hello Home</h1>
      </div>

      <NextGames />
    </div>
  );
}
