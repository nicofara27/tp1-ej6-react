import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import FormularioColores from './components/FormularioColores';

function App() {
  return (
    <Container className="my-5">
      <h1 className="display-2 text-center">Administrar colores</h1>
      <hr />
      <FormularioColores />
    </Container>
  );
}

export default App;
