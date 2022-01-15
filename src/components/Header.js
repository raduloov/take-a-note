import React from 'react';
import Button from './UI/Button';

export default function Header(props) {
  return (
    <div className="flex flex-col content-center items-center">
      <h1 className="text-white text-5xl mt-16 mb-5">
        Take-a-Note <i className="fas fa-feather-alt"></i>
      </h1>
      <Button onClick={props.onAddNewNote}>
        <i className="fas fa-plus"></i> Add New Note
      </Button>
    </div>
  );
}
