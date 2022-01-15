import React from 'react';

import Note from './UI/Note';

export default function Notes(props) {
  return (
    <div className="flex flex-wrap justify-center max-w-5xl">
      {props.notes.map(note => (
        <Note
          title={note.title}
          color={note.color}
          text={note.text}
          date={note.date}
          id={note.id}
          key={note.id}
          onDelete={props.onDelete}
        ></Note>
      ))}
    </div>
  );
}
