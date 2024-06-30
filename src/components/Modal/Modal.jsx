import React, { useEffect } from "react";

import Close from "assets/images/Icons/close.svg";

import { Backdrop, CloseSvg, Content, ModalContainer } from "./Modal.styled";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscapeKeyPress = (e) => {
      if (e.key === "Escape") onClose(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKeyPress);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop onClick={() => onClose(false)}>
      <ModalContainer onClick={stopPropagation}>
        <CloseSvg
          type="button"
          src={Close}
          alt="Close button"
          onClick={() => onClose(false)}
        />
        <Content>{children}</Content>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
