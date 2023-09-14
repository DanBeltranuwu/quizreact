import { Col, Row, Button, Container } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import virtualdom from "./virtualdom.png";

function App() {
  const [state, setState] = useState(0);

  const infoPage = [
    {
      title: "Today's Quiz!",
      subtitle: "Hoy vamos a hacer un quiz sobre React y useState",
    },
    {
      title: "Pregunta 1",
      subtitle: "¿Cómo se define un nuevo componente en React?",
      answer:
        "Creando un archivo .js con el nombre del nuevo componente para que inicialice sobre una función, también se puede inicializar sobre una constante, para esto se puede solo crear el componente directamente en el archivo index.js",
    },
    {
      title: "Pregunta 2",
      subtitle: "¿Cómo se define un nuevo estado?",
      answer:
        "Se usa la función useState y se usan dos variables, la primera es el valor del estado en si y la segunda es la función que modifica el estado, la función useState recibe por parámetro el valor inicial del",
    },
    {
      title: "Pregunta 3",
      subtitle: "F o V ... El inicializador del estado puede ser una función.",
      answer:
        "Verdadero, el inicializador del estado puede ser el procesamiento de un valor que se reciba por parámetro.",
    },
    {
      title: "Pregunta 4",
      subtitle: "¿Qué es el virtual DOM?",
      answer:
        "Es una representación en memoria del DOM, esto para poder calcular de manera eficiente lo que necesita hacer el compilador para cambiar de un estado a otro y así no redibuje toda la página sino únicamente los componentes o partes que cambien.",
      image: virtualdom,
    },
  ];

  const nextState = () => {
    if (state < 4) {
      setState(state + 1);
    }
  };

  const prevState = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };

  const resetState = () => {
    if (state > 0) {
      setState(0);
    }
  };

  return (
    <Container>
      <Col className="Center-content">
        <Row>
          <Col>
            <Button variant="primary" size="lg" onClick={resetState}>
              {" "}
              Restart
            </Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg" onClick={prevState}>
              {" "}
              Prev
            </Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg" onClick={nextState}>
              {" "}
              Next
            </Button>
          </Col>
        </Row>
      </Col>
      <div className="Center-content">
        <h1>{infoPage[state].title}</h1>
        <h3>{infoPage[state].subtitle}</h3>
        <h3>{infoPage[state].answer}</h3>
        {state === 4 && <img src={infoPage[state].image} alt="virtualdom" />}
      </div>
    </Container>
  );
}

export default App;
