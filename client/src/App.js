import StoreProvider from './store/storeProvider';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}

export default App;
