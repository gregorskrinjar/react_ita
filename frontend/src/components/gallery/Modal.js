import React, { useRef } from "react";
import { motion } from "framer-motion";
import Commentar from "../comments/Comment";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  margin-left: 25%;
  //grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  display: block;
    margin: 0 auto;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({ selectedImg, setSelectedImg }) => {
  let url = {};
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    // <motion.div className="backdrop" onClick={handleClick}
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    // >
    //     <motion.img src={selectedImg} alt="enlarged pic"
    //         initial={{ y: "-100vh" }}
    //         animate={{ y: 0 }}
    //     />
    //     {/* <div className="message" style={{float: 'center', color: 'white', backgroundColor: '#3B2A50'}}>
    //         {messages && messages.map(msg => <p>{msg.text}</p> )}
    //     </div> */}
    //     <Commentar />
    // </motion.div>
    <Background onClick={handleClick}>
      <div>
        <ModalWrapper selectedImg={selectedImg}>
          <ModalImg src={selectedImg.url} alt="img" />
          {/* <ModalContent>
            <Commentar selectedImg={selectedImg} />
          </ModalContent> */}
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setSelectedImg((prev) => !prev)}
          />
        </ModalWrapper>
      </div>
    </Background>
  );
};

export default Modal;
