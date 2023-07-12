import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import ColorContainer from "./components/Colorcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from './components/pages/Home';
import About from './components/pages/About';
import Artists from './components/pages/Artists';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import NavTabs from './components/NavTabs';
import Search from "./components/pages/Search";
import Footer from "./components/Footer";
import Success from "./components/pages/Success"

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
});

// Construct request middleware that attaches the JWT token to every request as an 'authorization' header
const authLink = setContext((_, { headers }) => {
    // get authorization token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the 'authLink middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="flex-column justify-flex-start min-100-vh">
                    <NavTabs />
                    <div className="container">
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/about"
                                element={<About />}
                            />
                            <Route
                                path="/artists"
                                element={<Artists />}
                            />
                            <Route
                                path="/search"
                                element={<Search />}
                            />
                            <Route
                                path="/login"
                                element={<Login />}
                            />
                            <Route
                                path="/me"
                                element={<Profile />}
                            />
                            <Route
                                path="/users/:userId"
                                element={<Profile />}
                            />

                            <Route
                            path="/Success"
                            element={<Success />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
