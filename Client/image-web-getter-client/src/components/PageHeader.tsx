import React from 'react';

interface Props {
  title?: string;
  color?: string;
  rounded?: string;
  zHeight?: string;
}

function PageHeader({
  title = '', color = '', rounded = '', zHeight = '',
}: Props) {
  return (
    <div className={`${color} ${rounded}  py-5 text-center text-white sticky top-0 ${zHeight}`}>
      <h1 className="text-4xl  ">{title}</h1>
    </div>

  );
}

export default React.memo(PageHeader);
