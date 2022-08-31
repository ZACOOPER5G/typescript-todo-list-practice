import { useState } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { uuid } from 'uuidv4'

type StatusBarProps = {
    key: string
}

export const StatusBar = ({ key }: StatusBarProps) => {
    const [radioValue, setRadioValue] = useState('');

    const radios = [
      { name: 'Ongoing', value: '1' },
      { name: 'Completed', value: '2' },
    ];

    return (
        <>
            <ButtonGroup className="ps-3 pe-5" >
            {radios.map((radio) => (
                <ToggleButton
                key={key}
                id={`radio-${key}`}
                type="radio"
                variant={radio.value === '2' ? 'outline-success' : 'outline-danger'}
                name="radio"
                value={radio.value}
                checked={radioValue == radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                {radio.name}
                </ToggleButton>
            ))}
            </ButtonGroup>
        </>
    )
}
