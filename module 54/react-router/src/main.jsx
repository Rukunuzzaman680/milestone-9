import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import First from './Components/First/First.jsx';
import Friends from './Components/Friends/Friends.jsx';
import FriendDetails from './Components/FriendDetails/FriendDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>,
//   },
//   {
//     path: '/about',
//     element: <About></About>,
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>,
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      },
      {
        path: 'post/:postId',
        element: <PostDetails></PostDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },

      {
        path: 'aboutUs',
        element: <About></About>,
      },
      {
        path: '*',
        element: '404 no found',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
