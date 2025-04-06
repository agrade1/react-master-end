import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled(motion.div)`
  width: 90%;
  max-width: 700px;
  background: #111;
  color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  z-index: 998;

  img{
    width: 100%;
  }
`;
export const ModalTitle = styled.h2`
    font-size: 24px;
    margin: 10px 0;
`
export const ModalText = styled.p`
    font-size: 16px;
    line-height: 1.4;
`