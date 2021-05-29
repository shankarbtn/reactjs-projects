import { useState } from 'react';
import Modal from './Modal';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModaleHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>DELETE</button>
      </div>
      {modalIsOpen && <Modal onConfirm={closeModaleHandler} onCancel={closeModaleHandler} />}
    </div>
  );
}

export default Todo;
