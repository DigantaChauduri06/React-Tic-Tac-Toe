import React, {useState} from 'react';
import Icons from './components/Icons'
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap'

const itemArray = new Array(9).fill('empty');

const App = ()=> {
  const [isCrossed, setisCrossed] = useState(false);
  const [winMessage, setwinMessage] = useState("");
  const reloadGame = () => {
    //
    // console.log(winMessage);
    setisCrossed(false);
    setwinMessage("");
    itemArray.fill("empty", 0, 9);
  };
  
  const checkwinner = () => {
    //
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setwinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      return setwinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      return setwinMessage(`${itemArray[1]} wins`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      return setwinMessage(`${itemArray[2]} wins`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      return setwinMessage(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      return setwinMessage(`${itemArray[6]} wins`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      return setwinMessage(`${itemArray[0]} wins`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      return setwinMessage(`${itemArray[2]} wins`);
    }
  };
  // idx, winMessage, isCrossed, setisCrossed
  const changeItem = (...args) => {
    //
    if (args[1]) {
      return toast(args[1], { type: "success" });
    }
    if (itemArray[args[0]] === "empty") {
      itemArray[args[0]] = args[2] ? "cross" : "circle";
      args[3](!args[2]);
    } else {
      return toast("Already filled", { type: "error" });
    }
    checkwinner();
  };
  
  function checkWinOrNot(winMessage) {
    if (winMessage !== "") {
      return true;
    }
    return false;
  }
  // return <Icons name='xox'/>
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {
            //console.log(winMessage)
            checkWinOrNot(winMessage) ? (
              <div>
                <h1>{winMessage}</h1>
                <Button color="success" block onClick={reloadGame}>
                  reload
                </Button>
              </div>
            ) : (
              <h1>{isCrossed ? "Cross turn" : "Circle turn"}</h1>
            )
          }
          <div className="grid">
            {itemArray.map((item, idx) => (
              <Card
                onClick={() =>
                  changeItem(idx, winMessage, isCrossed, setisCrossed)
                }
                color='warning'
              >
                <CardBody className="box">
                  <Icons name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
