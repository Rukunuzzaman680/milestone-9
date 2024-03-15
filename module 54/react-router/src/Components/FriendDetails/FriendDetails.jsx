import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css';

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div className="friend">
      <h2>Every Friend Details</h2>
      <h2>Id: {friend.id}</h2>
      <h2>Name: {friend.name}</h2>
      <h5>E-mail: {friend.email}</h5>
      <h5>Phone: {friend.phone}</h5>
    </div>
  );
};

export default FriendDetails;
