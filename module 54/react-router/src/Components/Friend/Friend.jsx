import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = friend => {
  // console.log(friend);
  const { id, name, email, phone } = friend.friend;
  return (
    <div className="friend">
      <h2>Id: {id}</h2>
      <h2>Name: {name}</h2>
      <h5>E-mail: {email}</h5>
      <h5>Phone: {phone}</h5>
      <Link to={`/friend/${id}`}>Show Details</Link>
    </div>
  );
};

export default Friend;
