import React from 'react';

interface Props {
  id: string;
  columns : string;
  shadow? : string;
  paddingY? : string;
  paddingX? : string;
  children : React.ReactNode;
}

function GridLayout({
  id,
  columns = ' md:grid-cols-4', shadow = '', paddingY = 'py-4', paddingX = 'px-4', children,
} : Props) {
  return (
    <div id={id} className={`grid  grid-cols-1 ${columns} ${shadow} gap-4 ${paddingY} ${paddingX}`}>{children}</div>
  );
}

export default GridLayout;
