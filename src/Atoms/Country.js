import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
const Country = () => {
    return (
        <>
            <DropdownButton
                variant="dark"
                id="dropdown-basic-button"
                title="Country code">
                <Dropdown.Item href="#/action-1">
                    {' '}
                    +1-844-889-4054{' '}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Otra acción</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Algo más</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
export default Country
