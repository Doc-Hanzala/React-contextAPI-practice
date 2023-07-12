import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { showModal, closeModal } = useGlobalContext();
  return (
    <div className={showModal ? "modal-overlay show-overlay" : "modal-overlay"}>
      <div className="modal-content">
        <h1 className="title">
          coding <span>doc</span>
        </h1>
        <AiOutlineClose className="close" onClick={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
