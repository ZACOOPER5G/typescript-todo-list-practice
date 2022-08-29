import { useState } from 'react';
import { Accordion, Button, CloseButton } from 'react-bootstrap';

export const TodoList = ({ todo }) => {
  const [todoItem, setTodoItem] = useState([])

  const [active, setActive] = useState(true)

  const toggleActive = () => {
    const currentState = active;
    setActive(!currentState)
  }

  return (
    <Accordion> 
      <Accordion.Item  eventKey="0" className='d-flex justify-content-between align-items-center pe-4'>
        <Accordion.Header className={active ? 'active' : 'not-active'} onClick={toggleActive} >Accordion Item #1</Accordion.Header>{active && <CloseButton />}
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}