function Modal(props) {
  return (
    <div className="backdrop">
      <div className="modal">
        <p>Are you sure to delete?</p>
        <div>
          <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
          <button className="btn" onClick={props.onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
