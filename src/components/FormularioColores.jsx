import { Form, Button } from "react-bootstrap";
import Color from "./Color";

const FormularioColores = () => {
  return (
    <>
      <section className="d-flex flex-wrap align-items-center justify-content-around bg-celeste py-3">
        <div
          className="py-5 mb-4 mb-md-0 col-4 col-md-2 col-lg-1"
          style={{ background: "blue" }}
        ></div>
        <div className="col-10 col-md-8 col-lg-10">
          <Form className="d-flex align-items-center">
            <Form.Group className="w-100" controlId="formBasicEmail">
              <Form.Control
                className="text-decoration-underline"
                type="text"
                placeholder="Ingrese un color ej blue"
                //   onChange={(e) => setTarea(e.target.value)}
                //   value={tarea}
              />
            </Form.Group>
            <Button className="shadow" variant="info" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </section>
      <section className="d-flex justify-content-center justify-content-md-around flex-wrap mt-5">
      <Color></Color>
      <Color></Color>
      <Color></Color>
      </section>
    </>
  );
};

export default FormularioColores;
