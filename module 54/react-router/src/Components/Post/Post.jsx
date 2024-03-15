import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = post => {
  const { id, title, body } = post.post;

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post">
      <h2>Id: {id}</h2>
      <p>Post Title: {title}</p>
      <p>Post Body: {body}</p>
      <Link className="link" to={`/post/${id}`}>
        Show Details
      </Link>
      <Link to={`/post/${id}`}>
        <button className="link">Show Post Details</button>
      </Link>
      <button className="link" onClick={handleNavigation}>
        Button Handler
      </button>
    </div>
  );
};

export default Post;
