
import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './components/CardGroup2/CardGroup2';



function App() {
  return (
    <div className="App">
      <h2>using react bootstrap</h2>
    <Button variant='danger'>my button</Button>
    <br></br>
    <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
    </Spinner>
    <CardGroup2></CardGroup2>
      
    </div>
  );
}

export default App;
