import React, { useState } from 'react'
import { Accordion, Button, CloseButton } from 'react-bootstrap'

type TodoItemsProps = {
    key: string;
    title: string;
    notes: string;
    onClick: () => void;
}

export const TodoItems = ({ key, title, notes, onClick }: TodoItemsProps) => {

  const [active, setActive] = useState<Boolean>(true)

  const toggleActive = () => {
    const currentState = active;
    setActive(!currentState)
  }

  return (
      <Accordion>
        <Accordion.Item  eventKey={key} key={key} className='d-flex justify-content-between align-items-center pe-4'>
          <Accordion.Header className={active ? 'active' : 'not-active'} onClick={toggleActive} >{title}</Accordion.Header>{!active && <CloseButton onClick={onClick} />}
            <Accordion.Body>
                {notes}
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  )
}
