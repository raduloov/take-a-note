import React from 'react';

export default function Note(props) {
  return (
    <div className={`${props.color} relative rounded-xl w-48 mt-10 mb-5 mx-5`}>
      <div className="relative flex justify-center text-xl shadow-md p-1">
        <h2>{props.title}</h2>
        <button
          onClick={() => props.onDelete(props.id)}
          className="absolute top-1 right-1 text-2xl hover:text-glass transition-all ease duration-500"
        >
          <i className="far fa-times-circle"></i>
        </button>
      </div>
      <div className="p-2 flex w-full text-lg">
        <p>{props.text}</p>
      </div>
      <div className="p-2 flex justify-center border-t">{props.date}</div>
    </div>
  );
}
