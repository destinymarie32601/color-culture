import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ColorContainer from "./components/Colorcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const client = new ApolloClient({
    uri: '/graphql',
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
