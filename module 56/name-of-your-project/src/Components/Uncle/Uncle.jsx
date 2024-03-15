import { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <h4>GrandPa Money: {money}</h4>
      <button onClick={() => setMoney(money + 1000)}>1000tk</button>
      <section className="flex">
        <Cousin>Nabil</Cousin>
        <Cousin>Nabila</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
