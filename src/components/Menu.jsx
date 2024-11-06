import React from 'react';
import { Dropdown } from 'react-bootstrap';

function Menu() {
    return (
        <Dropdown>
            <Dropdown.Menu show>
                <Dropdown.Item href="/">Admin</Dropdown.Item>
                <Dropdown.Item href="/">User</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Menu;
