import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../../utils/mutation';
import Auth from '../../utils/auth';

const Login = (props) => {
    //const [username, setUsername] = useState('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('login');
    const [login] = useMutation(LOGIN_USER);
    const [addUser] = useMutation(ADD_USER);
    const [loginState, setLoginState] = useState({ email: '', password: ''});
    const [signupState, setSignupState] = useState({ email: '', password: '', username: ''});

    const handleloginChange = (event) => {
        const { name, value } = event.target;

        setLoginState({
            ...loginState,
            [name]: value,
        });
    };

    const handlesignupChange = (event) => {
        const { name, value } = event.target;

        setSignupState({
            ...signupState,
            [name]: value,
        });
    };
    //function validateLoginForm() {
    //   return username.length > 0 && password.length > 5;
    //}

    //function validateSignUpForm() {
    //    return username.length > 0 && password.length > 5;
    //}

    async function handleLoginSubmit(event) {
        event.preventDefault();
        console.log(loginState);
        //if (validateLoginForm()) {
            try {
                const { data } = await login({
                    variables: { ...loginState },
                });
               
                Auth.login(data.login.token);
                console.log('Login successful!');
            } catch (error) {
                console.log('Invalid login credentials');
            }
        //}

        setLoginState({
            email: '',
            password: '',
        });
    };


    async function handleSignUpSubmit(event) {
        event.preventDefault();
        console.log(signupState);
        //if (validateSignUpForm()) {
            try {
                const { data } = await addUser({
                    variables: { ...signupState },
                });
                
                Auth.login(data.addUser.token);
                console.log('Sign up successful!');
            } catch (error) {
                console.log('Invalid sign-up');
            }
        //}

        setSignupState({
            email: '',
            password: '',
            username: '',
        });
    };

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
                                <Form.Group size='lg' controlId='login-email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        name='email'
                                        type='text'
                                        value={loginState.email}
                                        onChange={handleloginChange}
                                    />
                                </Form.Group>
                                <Form.Group size='lg' controlId='login-password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name='password'
                                        type='password'
                                        value={loginState.password}
                                        onChange={handleloginChange}
                                    />
                                </Form.Group>
                                <Button size='lg' type='submit' style={{ marginTop: '20px', marginBottom: '20px' }}>
                                    Login
                                </Button>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane eventKey='signup'>
                            <Form onSubmit={handleSignUpSubmit}>
                                <Form.Group size='lg' controlId='signup-username'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        name='username'
                                        type='text'
                                        value={signupState.username}
                                        onChange={handlesignupChange}
                                    />
                                </Form.Group>
                                <Form.Group size='lg' controlId='singup-email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name='email'
                                        type='email'
                                        value={signupState.email}
                                        onChange={handlesignupChange}
                                    />
                                </Form.Group>
                                <Form.Group size='lg' controlId='signup-password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name='password'
                                        type='password'
                                        value={signupState.password}
                                        onChange={handlesignupChange}
                                    />
                                </Form.Group>
                                <Button size='lg' type='submit' style={{ marginTop: '20px', marginBottom: '20px' }}>
                                    Sign Up
                                </Button>
                            </Form>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div >
    );
    /*return (
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-lg-10">
            <div className="card">
              <h4 className="card-header bg-dark text-light p-2">Login</h4>
              <div className="card-body">
                {data ? (
                  <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                ) : (
                  <form onSubmit={handleLoginSubmit}>
                    <input
                      className="form-input"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-block btn-info"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}
    
                {error && (
                  <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      );*/
}

export default Login;