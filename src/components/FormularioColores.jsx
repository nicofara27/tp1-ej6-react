import { useState } from "react";
import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Color from "./Color";

const FormularioColores = () => {
  const coloresLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || [];
  const [color, setColor] = useState("");
  const [arregloColores, setArregloColores] = useState(coloresLocalStorage);

  useEffect (()=> {
    localStorage.setItem("listaColores", JSON.stringify(arregloColores))
  })

  const handleSubmit = (e)=> {
    e.preventDefault();
    setArregloColores([...arregloColores, color]);
    setColor("");
  }

  const borrarColor = (color) => {
    let arregloMod = arregloColores.filter((item) => item !== color);

    setArregloColores(arregloMod);
  }

  return (
    <>
      <section className="d-flex flex-wrap align-items-center justify-content-around bg-celeste py-3">
        <div
          className="py-5 mb-4 mb-md-0 col-4 col-md-2 col-lg-1"
          style={{ background: color }}
        ></div>
        <div className="col-10 col-md-8 col-lg-10">
          <Form className="d-flex align-items-center" onSubmit={handleSubmit}>
            <Form.Group className="w-100" controlId="formBasicEmail">
              <Form.Control
                className="text-decoration-underline"
                type="text"
                placeholder="Ingrese un color ej blue"
                onChange={(e)=> setColor(e.target.value)}
                value={color}
              />
            </Form.Group>
            <Button className="shadow" variant="info" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </section>
      <section className="d-flex justify-content-center justify-content-md-around flex-wrap mt-5">
        {arregloColores.map((color, posicion) => (
          <Color key={posicion} nombreColor={color} borrarColor={borrarColor}></Color>
        ))}
      </section>
    </>
  );
};

export default FormularioColores;
