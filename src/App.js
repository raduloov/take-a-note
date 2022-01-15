import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Notes from './components/Notes';
import MainContainer from './components/UI/MainContainer';
import Modal from './components/UI/Modal';

function App() {
  const [notes, setNotes] = useState([]);
  const [modalIsShown, setModalIsShown] = useState(false);

  const openModal = () => {
    setModalIsShown(true);
  };

  const closeModal = () => {
    setModalIsShown(false);
  };

  const addNoteHandler = note => {
    setNotes(prevNotes => [note, ...prevNotes]);

    localStorage.setItem(note.id, JSON.stringify(note));
  };

  const deleteHandler = noteId => {
    setNotes(notes.filter(note => note.id !== noteId));

    localStorage.removeItem(noteId);
  };

  useEffect(() => {
    const data = localStorage.getItem('notes');

    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  });

  const empty = (
    <div className="text-white text-xl m-10 text-center leading-8 md:w-full sm:w-1/2">
      <p>No notes found, why not add one? :)</p>
    </div>
  );

  return (
    <MainContainer>
      {modalIsShown && (
        <Modal
          onClose={closeModal}
          onCloseButton={closeModal}
          onAddNote={addNoteHandler}
        />
      )}
      <Header onAddNewNote={openModal} />
      {notes.length === 0 && empty}
      {notes.length > 0 && <Notes notes={notes} onDelete={deleteHandler} />}
    </MainContainer>
  );
}

export default App;
