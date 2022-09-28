import { Card, Button } from "react-bootstrap";

const Color = () => {
  return (
    <article className="my-2">
      <Card>
        <Card.Body className="px-0">
          <Card.Title className="px-5">Color nombre</Card.Title>
          <div className="bg-celeste px-5 py-3">
            <div className="py-5" style={{background:"blue"}}></div>
          </div>
          <div className="text-end mt-3 me-3">
          <Button className="shadow" variant="danger">Borrar</Button>
          </div>
        </Card.Body>
      </Card>
    </article>
  );
};

export default Color;
