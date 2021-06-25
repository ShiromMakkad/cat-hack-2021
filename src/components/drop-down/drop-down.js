import './drop-down.css'
import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

const DropDownComp = () => (
    <DropdownButton id="dropdown-basic-button" title="US">
        <Dropdown.Item href="#/action-2">UK</Dropdown.Item>
        <Dropdown.Item href="#/action-3">China</Dropdown.Item>
        <Dropdown.Item href="#/action-3">India</Dropdown.Item>
    </DropdownButton>
)

export default DropDownComp