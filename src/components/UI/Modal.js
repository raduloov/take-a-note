import React from 'react';
import ReactDOM from 'react-dom';
import AddNewMenu from './AddNewMenu';

function Backdrop(props) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[200vh] z-20 bg-backdrop backdrop-blur-sm"
      onClick={props.onClose}
    />
  );
}

function ModalOverlay(props) {
  return (
    <div className="fixed md:top-[20vh] left-[50%] -translate-x-1/2 sm:top-[5vh] bg-glass p-0 rounded-2xl shadow-md z-30 animate-[slide-down_0.5s_ease_forwards] sm:w-[85%] md:w-auto">
      <div>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlay');

export default function Modal(props) {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <AddNewMenu
            onClick={props.onCloseButton}
            onAddNote={props.onAddNote}
            onClose={props.onClose}
          />
        </ModalOverlay>,
        portalElement
      )}
    </div>
  );
}
