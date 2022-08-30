import React, { useState } from 'react'
import { Accordion, CloseButton, ButtonGroup, ToggleButton } from 'react-bootstrap'

type TodoItemsProps = {
    key: string;
    title: string;
    notes: string;
    removeTodo: (title: string) => void;
}

export const TodoItems = ({ key, title, notes, removeTodo }: TodoItemsProps) => {

  const [active, setActive] = useState<Boolean>(true)

  const toggleActive = () => {
    const currentState = active;
    setActive(!currentState)
  }
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Ongoing', value: '1' },
    { name: 'Completed', value: '2' },
  ];

  return (
      <Accordion>
        <Accordion.Item  eventKey={key} className='d-flex justify-content-between align-items-center pe-4'>
          <Accordion.Header className={active ? 'active' : 'not-active'} onClick={toggleActive} >{title}</Accordion.Header>{
          !active && 
          <><ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup><CloseButton onClick={() => removeTodo(title)} /></>
          }
            <Accordion.Body>
                {notes}
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  )
}
