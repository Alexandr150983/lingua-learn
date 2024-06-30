import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  max-width: 100%;
  max-height: 90vh;
  transform: translate(-50%, -50%);
  padding: 4.44vw;
  border-radius: 2.08vw;
  background-color: var(--white);
`;

export const CloseSvg = styled.img`
  position: absolute;
  top: 1.39vw;
  right: 1.39vw;
  width: 2.22vw;
  height: 2.22vw;
  cursor: pointer;
  z-index: 1001;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
  overflow-y: auto;
  max-height: 90vh;
`;
