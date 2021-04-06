import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL + `/players`;

export default function usePlayersSearch(props) {
  const [error, setError] = useState(false);
  const [players, setPlayers] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [query, pageNumber, pageSize] = props;

  // useEffect(() => {
  //   setPlayers([]);
  // }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      url: url,
      method: 'GET',
      params: { key: API_KEY },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setPlayers((prevPlayers) => {
          return [...prevPlayers, ...res.data.data];
        });
        setHasMore(res.data.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        if (axios.isCancel(e)) return;
      });

    return () => {
      cancel();
    };
  }, [props]);

  return { error, players, hasMore, loading };
}
