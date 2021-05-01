import { useEffect, useState } from 'react';
import { types } from '../../store/storeReducer';
import useApiSearch from '../../helpers/apiHooks/useApiSearch';
import { useDispatch, useStore } from '../../store/storeProvider';

const QUERY = `v1/games?filter[season][eq]=2021`;

export default function GamesPage() {
  const store = useStore();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const seasonGames2021 = useApiSearch({ query: QUERY });
  const { error, errorMsg, data, hasMore, loading } = seasonGames2021;

  useEffect(() => {
    if (error) {
      dispatch({ type: types.setError, payload: errorMsg });
      return;
    }
    if (loading) {
      setIsLoading(true);
      return;
    }
    dispatch({ type: types.setGames, payload: data });
  }, [data, dispatch, error, errorMsg, loading]);

  return <div>Hello games</div>;
}
