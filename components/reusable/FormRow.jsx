import React from 'react';

const FormRow = ({ children, columns = 2 }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
      {children}
    </div>
  );
};

export default FormRow;