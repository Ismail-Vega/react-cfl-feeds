import getPlayers from './helpers/apiHooks/usePlayersSearch';
import StoreProvider from './store/storeProvider';
import AppRouter from './routers/AppRouter';

function App() {
  getPlayers();
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}

export default App;
