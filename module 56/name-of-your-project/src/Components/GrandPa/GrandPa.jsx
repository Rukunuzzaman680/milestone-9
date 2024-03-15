import { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css';

export const RingContext = createContext('Golden');
export const MoneyContext = createContext(0);

const GrandPa = () => {
  const ring = 'Diamond Ring';
  const [money, setMoney] = useState(0);

  return (
    <div className="grand">
      <h2>GrandFather</h2>
      <p>Has Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Golden Ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty ring={ring}></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

/**
 * 1.create context and export
 * 2.create a provider and pass a value
 * 3.use useContext to receive value
 */
