import { useEffect } from 'react';
import { types } from '../../store/storeReducer';
import { useDispatch, useStore } from '../../store/storeProvider';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {};
  }, []);

  return <div>Hello Home</div>;
}