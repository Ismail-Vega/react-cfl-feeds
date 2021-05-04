import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useApiSearch(props) {
  const { query } = props;
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let cancel;
    setError(false);
    setLoading(true);

    axios({
      url: query,
      method: 'GET',
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData((prevData) => {
          return res?.data ? [...prevData, ...res.data] : [];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setErrorMsg(e);
        if (axios.isCancel(e)) return;
      });

    return () => {
      cancel();
    };
  }, [query]);

  return { error, errorMsg, data, hasMore, loading };
}
