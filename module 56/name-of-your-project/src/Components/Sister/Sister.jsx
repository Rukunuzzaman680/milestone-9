import { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';

const Sister = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h3>Sister</h3>
      <h4>Grnad Money: {money}</h4>
    </div>
  );
};

export default Sister;
