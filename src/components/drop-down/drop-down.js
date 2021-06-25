import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

// const countryOptions = [
//     {
//         key: 'US',
//         text: 'US',
//         value: 'US'
//     },
//     {
//         key: 'UK',
//         text: 'UK',
//         value: 'UK'
//     },
//     {
//         key: 'India',
//         text: 'India',
//         value: 'India'
//     },
//     {
//         key: 'China',
//         text: 'China',
//         value: 'China'
//     }
// ]

const DropDownComp = () => (
    <DropdownButton id="dropdown-basic-button" title="Select Country">
        <Dropdown.Item href="#/action-1">US</Dropdown.Item>
        <Dropdown.Item href="#/action-2">UK</Dropdown.Item>
        <Dropdown.Item href="#/action-3">China</Dropdown.Item>
        <Dropdown.Item href="#/action-3">India</Dropdown.Item>
    </DropdownButton>
)

export default DropDownComp