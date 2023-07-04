import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

export default function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('login');

    function validateLoginForm() {
        return username.length > 0 && password.length > 5;
    }

    function validateSignUpForm() {
        return username.length > 0 && password.length > 5;
    }

    function handleLoginSubmit(event) {
        event.preventDefault();
        if (validateLoginForm()) {
            console.log('Login successful!');
        } else {
            console.log('Invalid login credentials');
        }
    }

    function handleSignUpSubmit(event) {
        event.preventDefault();
        if (validateSignUpForm()) {
            console.log('Sign up successful!');
        } else {
            console.log('Invalid sign-up')
        }
    }

    function handleTabSelect(tab) {
        setActiveTab(tab);
    }

    return (
        <div className='Login'>
            <div className='container' style={{ width: '500px', margin: '20px auto', border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}>
                <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                    <Nav varient='tabs' style={{ width: '100%', justifyContent: 'center' }}>
                        <Nav.Item>
                            <Nav.Link eventKey="login" style={{ width: '105px', border: '1px solid #ccc', borderRadius: '4px', padding: '10px 20px', background: activeTab === 'login' ? '#f0f0f0' : 'transparent' }}>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="signup" style={{ width: '105px', border: '1px solid #ccc', borderRadius: '4px', padding: '10px 20px', background: activeTab === 'login' ? '#f0f0f0' : 'transparent' }}>Sign Up</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='login'>
                            <Form onSubmit={handleLoginSubmit}>
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
                                <Button block size='lg' type='submit' disabled={!validateLoginForm()} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                    Login
                                </Button>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey='signup'>
                            <Form onSubmit={handleSignUpSubmit}>
                                <Form.Group size='lg' controlId='username'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type='text'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group size='lg' controlId='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                <Button block size='lg' type='submit' disabled={!validateSignUpForm()} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                    Sign Up
                                </Button>
                            </Form>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div >
    );
}