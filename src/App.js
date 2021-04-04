import logo from './logo.svg';
import './App.css';
import getPlayers from './helpers/apiHelpers/getPlayers';
import StoreProvider from './store/storeProvider';

function App() {
  console.log(getPlayers());
  return <StoreProvider></StoreProvider>;
}

export default App;
