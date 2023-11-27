import logo from './logo.svg';
import './App.css';
import {Button,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Container className="container2">
      <h1>Hello,Bootstrap!</h1>
      <Button variant="primary">Click me</Button>
    </Container>
  );
}

export default App;
