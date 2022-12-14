import React, { useState } from 'react'
import { Accordion, CloseButton, ButtonGroup, ToggleButton } from 'react-bootstrap'
import { StatusBar } from './StatusBar';

type TodoItemsProps = {
    key: string;
    title: string;
    notes: string;
    removeTodo: (title: string) => void;
}

export const TodoItems = ({ key, title, notes, removeTodo }: TodoItemsProps) => {

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <Accordion className="gap-3 mb-4">
            <Accordion.Item eventKey={key} >
            <Accordion.Header >{capitalizeFirstLetter(title)}
                <span className="ps-3 pe-3" ><StatusBar key={key} /><CloseButton onClick={() => removeTodo(title)} />
                </span></Accordion.Header>
                <Accordion.Body>
                    {notes}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
