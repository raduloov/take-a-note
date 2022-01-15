import React from 'react';

export default function MainContainer(props) {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
      {props.children}
    </div>
  );
}
