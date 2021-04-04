const API_KEY = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;

const getPlayers = async () => {
  const res = await fetch(url + `/players?key=${API_KEY}`);
  const players = await res.json();
  return players;
};

export default getPlayers;
