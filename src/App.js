
// import './App.css';
import Notes from './components/notes/Notes';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './components/css/style.module.scss';

function App() {
  return (
    <Container fluid className={`${style.orange} p-5`}>
      <div className="bg-white ">
        <Container >
          <Notes />
        </Container>
      </div>
    </Container>
    
  );
}

export default App;
