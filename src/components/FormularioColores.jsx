import { useState } from "react";
import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { consultarColoresApi, crearColorApi } from "./helpers/queries";
import Color from "./Color";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const FormularioColores = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  setFocus("nombreColor");

  useEffect(() => {
    consultarColoresApi().then(
      (respuesta) => {
        setColores(respuesta);
      },
      (reason) => {
        console.log(reason);
        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente mas tarde",
          "error"
        );
      }
    );
  }, []);

  const onSubmit = (datos) => {
    console.log(color);
    crearColorApi(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Color subido",
          "El color fue subido exitosamente",
          "success"
        );
        reset();
        consultarColoresApi().then((respuesta) => {
          setColores(respuesta);
        });
      } else {
        Swal.fire("Ocurrio un error", "El color no se pudo subir", "error");
      }
    });
  };

  return (
    <>
      <section className="d-flex flex-wrap align-items-center justify-content-around bg-celeste py-3">
        <div
          className="py-5 mb-4 mb-md-0 col-4 col-md-2 col-lg-1"
          style={{ background: color }}
        ></div>
        <div className="col-10 col-md-8 col-lg-10">
          <Form
            className="d-flex align-items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Group className="w-100" controlId="formBasicEmail">
              <Form.Control
                className="text-decoration-underline"
                type="text"
                placeholder="Ingrese un color ej blue"
                onChange={(e) => setColor(e.target.value)}
                {...register("nombreColor", {
                  required: "El nombre del color es obligatorio",
                  minLength: {
                    value: 3,
                    message: "La cantidad de caracteres minima es de 3",
                  },
                  maxLength: {
                    value: 20,
                    message: "La cantidad de caracteres maxima es de 20",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreColor?.message}
              </Form.Text>
            </Form.Group>
            <Button className="shadow" variant="info" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </section>
      <section className="d-flex justify-content-center justify-content-md-around flex-wrap mt-5">
        {colores.map((color) => (
          <Color key={color._id} color={color} setColores={setColores}></Color>
        ))}
      </section>
    </>
  );
};

export default FormularioColores;
