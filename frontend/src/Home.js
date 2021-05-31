import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from "./Header";
import { Jumbotron, Button } from 'reactstrap';
import { useHistory  } from 'react-router-dom';
//import "~bootstrap/scss/bootstrap";


function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  
  return (
      <React.Fragment>
        <Header />
        <div>
          <Jumbotron bg="warning">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button type="button" onClick={handleClick} color="primary">Registracija</Button>
            </p>
          </Jumbotron>
        </div>
      </React.Fragment>
    )
}

export default Home;