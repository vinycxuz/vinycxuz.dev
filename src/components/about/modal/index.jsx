import { Modal } from "flowbite-react";
import { useState } from "react";

import './styleModal.css';

function ModalAbout(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className="btnm from-left" onClick={() => setOpenModal(true)}>Language</button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{props.title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {props.content}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setOpenModal(false)}>I accept</button>
          <button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAbout;