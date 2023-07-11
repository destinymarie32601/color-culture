import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../../utils/mutation';
import Auth from '../../utils/auth';

export default function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('login');
    const [loginUser] = useMutation(LOGIN_USER);
    const [signupUser] = useMutation(ADD_USER);

    function validateLoginForm() {
        return username.length > 0 && password.length > 5;
    }

    function validateSignUpForm() {
        return username.length > 0 && password.length > 5;
    }

    async function handleLoginSubmit(event) {
        event.preventDefault();
        if (validateLoginForm()) {
            try {
                const { data } = await loginUser({
                    variables: { username, password },
                });
                const token = data.login.token;
                Auth.login(token);
                console.log('Login successful!');
            } catch (error) {
                console.log('Invalid login credentials');
            }
        }
    }


    async function handleSignUpSubmit(event) {
        event.preventDefault();
        if (validateSignUpForm()) {
            try {
                const { data } = await signupUser({
                    variables: { username, email, password },
                });
                const token = data.signup.token;
                Auth.login(token);
                console.log('Sign up successful!');
            } catch (error) {
                console.log('Invalid sign-up');
            }
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
                            <Nav.Link eventKey="login" style={{
                                width: '105px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                padding: '10px 20px',
                                background: activeTab === 'login' ? '#f0f0f0' : 'transparent',
                                fontWeight: activeTab === 'login' ? 'bold' : 'normal',
                            }}>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="signup" style={{
                                width: '105px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                padding: '10px 20px',
                                background: activeTab === 'signup' ? '#f0f0f0' : 'transparent',
                                fontWeight: activeTab === 'signup' ? 'bold' : 'normal',
                            }}>Sign Up</Nav.Link>
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
                                <Button size='lg' type='submit' disabled={!validateLoginForm()} style={{ marginTop: '20px', marginBottom: '20px' }}>
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
                                <Button size='lg' type='submit' disabled={!validateSignUpForm()} style={{ marginTop: '20px', marginBottom: '20px' }}>
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