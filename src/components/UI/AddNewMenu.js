import React, { useState } from 'react';

import Button from './Button';

export default function AddNewMenu(props) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [text, setText] = useState('');

  const titleChangeHandler = e => {
    setTitle(e.target.value);
  };

  const textChangeHandler = e => {
    setText(e.target.value);
  };

  const colorChangeHandler = color => {
    setColor(color);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (text.length === 0 || title.length === 0) return;

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = new Date().getDate();
    const month = months[new Date().getMonth()];
    const year = new Date().getFullYear();

    const date = `${day} ${month} ${year}`;

    const colors = [
      'bg-white',
      'bg-green-400',
      'bg-red-400',
      'bg-orange-400',
      'bg-violet-400',
      'bg-sky-400',
    ];

    const note = {
      title,
      text,
      date,
      color: color === '' ? colors[Math.floor(Math.random() * 6)] : color,
      id: Math.random().toString().slice(2),
    };

    props.onAddNote(note);
    props.onClose();
    setTitle('');
    setText('');
  };

  return (
    <div className="bg-glass-lighter rounded-xl">
      <div className="flex justify-center items-center relative text-3xl shadow-lg p-5">
        <h2>Add a new note:</h2>
        <button
          onClick={props.onClick}
          className="absolute top-5 right-4 text-4xl hover:text-glass transition-all ease duration-500"
        >
          <i className="far fa-times-circle"></i>
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        className="p-5 flex-col justify-center items-center sm:p-0"
      >
        <div className="m-3">
          <label htmlFor="title" className="text-2xl">
            Title<span className="text-red-600">*</span>
          </label>
          <br></br>
          <input
            onChange={titleChangeHandler}
            type="text"
            value={title}
            placeholder="Note title..."
            className="rounded-lg p-2 text-3xl w-full"
          />
        </div>
        <div className="m-3">
          <label htmlFor="content" className="text-2xl">
            Content<span className="text-red-600">*</span>
          </label>
          <br></br>
          <textarea
            onChange={textChangeHandler}
            type="text"
            value={text}
            placeholder="T'was a good day..."
            className="rounded-lg p-2 text-2xl md:h-56 sm:h-32 w-full resize-none"
          />
        </div>

        <div className="m-3">
          <label htmlFor="color" className="text-2xl">
            Color
          </label>
          <br></br>
          <div className="flex justify-evenly mt-2 flex-wrap">
            <div
              onClick={() => colorChangeHandler('bg-white')}
              className={`${
                color === 'bg-white' ? 'opacity-100' : 'opacity-40'
              } flex justify-center items-center rounded-md bg-glass h-14 w-14 md:m-2 sm:m-3 cursor-pointer hover:opacity-100 transition-all ease duration-300`}
            >
              <div className="border border-black h-11 w-11 bg-white"></div>
            </div>
            <div
              onClick={() => colorChangeHandler('bg-green-400')}
              className={`${
                color === 'bg-green-400' ? 'opacity-100' : 'opacity-40'
              } flex justify-center items-center rounded-md bg-glass h-14 w-14 md:m-2 sm:m-3 cursor-pointer hover:opacity-100 transition-all ease duration-300`}
            >
              <div className="border border-black h-11 w-11 bg-green-400"></div>
            </div>
            <div
              onClick={() => colorChangeHandler('bg-red-400')}
              className={`${
                color === 'bg-red-400' ? 'opacity-100' : 'opacity-40'
              } flex justify-center items-center rounded-md bg-glass h-14 w-14 md:m-2 sm:m-3 cursor-pointer hover:opacity-100 transition-all ease duration-300`}
            >
              <div className="border border-black h-11 w-11 bg-red-400"></div>
            </div>
            <div
              onClick={() => colorChangeHandler('bg-orange-400')}
              className={`${
                color === 'bg-orange-400' ? 'opacity-100' : 'opacity-40'
              } flex justify-center items-center rounded-md bg-glass h-14 w-14 md:m-2 sm:m-3 cursor-pointer hover:opacity-100 transition-all ease duration-300`}
            >
              <div className="border border-black h-11 w-11 bg-orange-400"></div>
            </div>
            <div
              onClick={() => colorChangeHandler('bg-violet-400')}
              className={`${
                color === 'bg-violet-400' ? 'opacity-100' : 'opacity-40'
              } flex justify-center items-center rounded-md bg-glass h-14 w-14 md:m-2 sm:m-3 cursor-pointer hover:opacity-100 transition-all ease duration-300`}
            >
              <div className="border border-black h-11 w-11 bg-violet-400"></div>
            </div>
            <div
              onClick={() => colorChangeHandler('bg-sky-400')}
              className={`${
                color === 'bg-sky-400' ? 'opacity-100' : 'opacity-40'
              } flex justify-center items-center rounded-md bg-glass h-14 w-14 md:m-2 sm:m-3 cursor-pointer hover:opacity-100 transition-all ease duration-300`}
            >
              <div className="border border-black h-11 w-11 bg-sky-400"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-3">
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
}
