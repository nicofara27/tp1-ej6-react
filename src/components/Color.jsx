import { Card, Button } from "react-bootstrap";

const Color = ({nombreColor, borrarColor }) => {
  return (
    <article className="m-2 col-8 col-md-3 col-lg-2">
      <Card>
        <Card.Body className="px-0">
          <Card.Title className="ms-3 lead fw-bolder fs-4">{nombreColor}</Card.Title>
          <div className="bg-celeste px-5 px-md-4 py-3">
            <div className="py-5" style={{ background: nombreColor}}></div>
          </div>
          <div className="text-end mt-3 me-3">
            <Button
              className="shadow"
              variant="danger"
              onClick={() => {
                borrarColor(nombreColor);
              }}
            >
              Borrar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </article>
  )
}

export default Color;
