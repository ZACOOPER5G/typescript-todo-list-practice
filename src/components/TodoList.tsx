import { useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import { TodoItems } from './TodoItems';

export const TodoList = () => {
  const [todoList, setTodoList] = useState([])

  type TodoProps = {
    title: string;
    notes: string;
}

const todoInitialValue: TodoProps = {
    title: '',
    notes: '',
}

const [todo, setTodo] = useState(todoInitialValue)

const onFormUpdate = (category: string, value: string) => {
    setTodo({
        ...todo,
        [category]: value
    })
};

const handleSubmit = (e: any) => {
    e.preventDefault();
    const newTodoList: string[] = [todo, ...todoList]
    setTodoList(newTodoList)
    setTodo(todoInitialValue)
}

  return (
    <>
    <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" value={todo.title} onChange={(e) => onFormUpdate('title', e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Note</Form.Label>
            <Form.Control as="textarea" placeholder="Add notes..." rows={3} value={todo.notes} onChange={(e) => onFormUpdate('notes', e.target.value)}/>
        </Form.Group>
        <Button type="submit" className="mb-3">Add Todo Item</Button>
    </Form>
      <Accordion> 
      {/* {
          todoList.map((key, title, notes) => {
              return <TodoItems key={key} title={title} notes={notes} {...todoList} />
          })
      } */}
      </Accordion>
    </>
  );
}