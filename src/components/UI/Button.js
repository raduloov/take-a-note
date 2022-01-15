import React from 'react';

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-glass rounded-2xl h-14 w-3/4 text-lg opacity-70 hover:opacity-100 transition-all ease duration-500"
    >
      {props.children}
    </button>
  );
}
