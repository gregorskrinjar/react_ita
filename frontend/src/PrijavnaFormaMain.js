import './App.css';
import styled from "styled-components";
import { AccountBox } from './components/accountBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//import "~bootstrap/scss/bootstrap";

const AppContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function PrijavnaFormaMain() {
  return (
      <AppContainer>
        <AccountBox />
      </AppContainer>
    )
}

export default PrijavnaFormaMain;
