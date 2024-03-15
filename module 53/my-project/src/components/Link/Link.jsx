import React from 'react';

const Link = ({ route }) => {
  return (
    <li className="mr-12 mb-2 hover:bg-blue-600">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
