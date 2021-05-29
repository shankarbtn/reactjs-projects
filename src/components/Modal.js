function Modal() {
  return (
    <div className="backdrop">
      <div className="modal">
        <p>Are you sure to delete?</p>
        <div>
          <button className="btn btn--alt">Cancel</button>
          <button className="btn">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
