import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import ColorContainer from "./components/Colorcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
            <ColorContainer />
        </ApolloProvider>
    );
}

export default App;
