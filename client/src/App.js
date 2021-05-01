import AppRouter from './routers/AppRouter';
import StoreProvider from './store/storeProvider';

function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}

export default App;
