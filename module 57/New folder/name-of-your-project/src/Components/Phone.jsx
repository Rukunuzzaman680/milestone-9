import { useLoaderData } from 'react-router-dom';

const Phone = () => {
  const phone = useLoaderData();
  return (
    <div>
      <h2>Name: {phone.name}</h2>
      <img src={phone.image} alt="" />
      <p>Price: {phone.price}</p>
    </div>
  );
};

export default Phone;
