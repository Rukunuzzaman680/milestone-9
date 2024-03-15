import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
  const post = useLoaderData();

  const navigate = useNavigate();

  const backNavigation = () => {
    navigate(-1);
  };
  return (
    <div className="post">
      <h2>Every Post details</h2>
      <h2>Id: {post.id}</h2>
      <p>Post Title: {post.title}</p>
      <p>Post Body: {post.body}</p>
      <button onClick={backNavigation}>Go Back</button>
    </div>
  );
};

export default PostDetails;
