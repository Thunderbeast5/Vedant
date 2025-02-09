import React from 'react';

const Card = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`px-6 py-4 border-b border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardContent = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`px-6 py-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardTitle = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <h3 
      className={`text-lg font-medium ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export { Card, CardHeader, CardContent, CardTitle };