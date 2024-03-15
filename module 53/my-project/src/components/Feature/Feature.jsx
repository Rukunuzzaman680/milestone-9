import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({ feature }) => {
  return (
    <div className="flex my-2">
      <CheckCircleIcon className="h-6 w-6 text-blue-900 mx-1" />
      <span className="font-medium">{feature}</span>
    </div>
  );
};

export default Feature;
