import { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ ring }) => {
  const ringAunty = useContext(RingContext);

  return (
    <div>
      <h3>Special</h3>
      <p>{ringAunty}</p>
    </div>
  );
};

export default Special;
