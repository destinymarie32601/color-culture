import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('login');

    function validateForm() {
        return username.length > 0 && password.length > 5;
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Handle login form submission
    }

    function handleTabSelect(tab) {
        setActiveTab(tab);
    }

    return (
        <div className='Login'>
            <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                <Nav varient='tabs'>
                    <Nav.Item>
                        <Nav.Link eventKey="login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey='login'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group size='lg' controlId='username'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type='text'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size='lg' controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button block size='lg' type='submit' disabled={!validateForm()}>
                                Login
                            </Button>
                        </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey='signup'>
                        
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}