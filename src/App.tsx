import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="mt-4">
      <TodoInput />
    </Container>
  );
}

export default App;