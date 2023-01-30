import { useEffect } from 'react';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { loadInitialDataSocket } from '../actions/action';
import Currencies from '../components/Currencies';

const Home = () => {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers);

  useEffect(() => {
    const socket = io.connect('http://localhost:4000');
    socket.emit('start');

    dispatch(loadInitialDataSocket(socket));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <Currencies tickers={tickers} />
    </div>
  );
};

export default Home;
